import { useState, useRef } from 'react';
import {
  Box,
  IconButton,
  Typography,
  Snackbar,
  Alert,
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CloseIcon from '@mui/icons-material/Close';

interface PhotoUploaderProps {
  photos: File[];
  onPhotosChange: (photos: File[]) => void;
  maxFiles?: number;
}

const PhotoUploader = ({ photos, onPhotosChange, maxFiles = 2 }: PhotoUploaderProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const validateFile = (file: File): boolean => {
    const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      setError('Only image files (JPG, PNG, GIF, WebP) are allowed');
      return false;
    }
    return true;
  };

  const handleFiles = (files: FileList | null) => {
    if (!files) return;

    const newFiles = Array.from(files);
    const validFiles: File[] = [];

    for (const file of newFiles) {
      if (photos.length + validFiles.length >= maxFiles) {
        setError(`Maximum ${maxFiles} photos allowed`);
        break;
      }
      if (validateFile(file)) {
        validFiles.push(file);
      }
    }

    if (validFiles.length > 0) {
      onPhotosChange([...photos, ...validFiles]);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    handleFiles(e.dataTransfer.files);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleRemove = (index: number) => {
    const updated = photos.filter((_, i) => i !== index);
    onPhotosChange(updated);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <Box>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        onChange={(e) => handleFiles(e.target.files)}
        style={{ display: 'none' }}
      />

      <Box
        onClick={handleClick}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        sx={{
          border: '2px dashed',
          borderColor: isDragOver ? 'primary.main' : 'grey.300',
          borderRadius: 2,
          p: 3,
          textAlign: 'center',
          cursor: 'pointer',
          backgroundColor: isDragOver ? 'action.hover' : 'transparent',
          transition: 'all 0.2s',
          '&:hover': {
            borderColor: 'primary.main',
            backgroundColor: 'action.hover',
          },
        }}
      >
        <CloudUploadIcon sx={{ fontSize: 40, color: 'grey.400', mb: 1 }} />
        <Typography variant="body2" color="text.secondary">
          Click or drag photos here
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Max {maxFiles} images (JPG, PNG, GIF, WebP)
        </Typography>
      </Box>

      {photos.length > 0 && (
        <Box sx={{ display: 'flex', gap: 1, mt: 2, flexWrap: 'wrap' }}>
          {photos.map((photo, index) => (
            <Box
              key={index}
              sx={{
                position: 'relative',
                width: 80,
                height: 80,
                borderRadius: 1,
                overflow: 'hidden',
                border: '1px solid',
                borderColor: 'divider',
              }}
            >
              <img
                src={URL.createObjectURL(photo)}
                alt={`Upload ${index + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
              <IconButton
                size="small"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemove(index);
                }}
                sx={{
                  position: 'absolute',
                  top: 2,
                  right: 2,
                  backgroundColor: 'rgba(0,0,0,0.6)',
                  color: 'white',
                  p: 0.3,
                  '&:hover': {
                    backgroundColor: 'rgba(0,0,0,0.8)',
                  },
                }}
              >
                <CloseIcon sx={{ fontSize: 14 }} />
              </IconButton>
            </Box>
          ))}
        </Box>
      )}

      <Snackbar
        open={Boolean(error)}
        autoHideDuration={4000}
        onClose={() => setError(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="error" onClose={() => setError(null)}>
          {error}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default PhotoUploader;
