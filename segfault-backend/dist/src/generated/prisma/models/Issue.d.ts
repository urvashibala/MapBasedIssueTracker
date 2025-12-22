import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Issue
 *
 */
export type IssueModel = runtime.Types.Result.DefaultSelection<Prisma.$IssuePayload>;
export type AggregateIssue = {
    _count: IssueCountAggregateOutputType | null;
    _avg: IssueAvgAggregateOutputType | null;
    _sum: IssueSumAggregateOutputType | null;
    _min: IssueMinAggregateOutputType | null;
    _max: IssueMaxAggregateOutputType | null;
};
export type IssueAvgAggregateOutputType = {
    id: number | null;
    latitude: number | null;
    longitude: number | null;
    userId: number | null;
    guestTokenId: number | null;
    severity: number | null;
};
export type IssueSumAggregateOutputType = {
    id: number | null;
    latitude: number | null;
    longitude: number | null;
    userId: number | null;
    guestTokenId: number | null;
    severity: number | null;
};
export type IssueMinAggregateOutputType = {
    id: number | null;
    title: string | null;
    description: string | null;
    latitude: number | null;
    longitude: number | null;
    status: $Enums.IssueStatus | null;
    authorized: $Enums.IssueAuthorized | null;
    error: $Enums.IssueError | null;
    createdAt: Date | null;
    imageBlobId: string | null;
    userId: number | null;
    guestTokenId: number | null;
    issueType: $Enums.IssueType | null;
    severity: number | null;
    updatedAt: Date | null;
};
export type IssueMaxAggregateOutputType = {
    id: number | null;
    title: string | null;
    description: string | null;
    latitude: number | null;
    longitude: number | null;
    status: $Enums.IssueStatus | null;
    authorized: $Enums.IssueAuthorized | null;
    error: $Enums.IssueError | null;
    createdAt: Date | null;
    imageBlobId: string | null;
    userId: number | null;
    guestTokenId: number | null;
    issueType: $Enums.IssueType | null;
    severity: number | null;
    updatedAt: Date | null;
};
export type IssueCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    latitude: number;
    longitude: number;
    status: number;
    authorized: number;
    error: number;
    createdAt: number;
    imageBlobId: number;
    userId: number;
    guestTokenId: number;
    issueType: number;
    severity: number;
    updatedAt: number;
    _all: number;
};
export type IssueAvgAggregateInputType = {
    id?: true;
    latitude?: true;
    longitude?: true;
    userId?: true;
    guestTokenId?: true;
    severity?: true;
};
export type IssueSumAggregateInputType = {
    id?: true;
    latitude?: true;
    longitude?: true;
    userId?: true;
    guestTokenId?: true;
    severity?: true;
};
export type IssueMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    latitude?: true;
    longitude?: true;
    status?: true;
    authorized?: true;
    error?: true;
    createdAt?: true;
    imageBlobId?: true;
    userId?: true;
    guestTokenId?: true;
    issueType?: true;
    severity?: true;
    updatedAt?: true;
};
export type IssueMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    latitude?: true;
    longitude?: true;
    status?: true;
    authorized?: true;
    error?: true;
    createdAt?: true;
    imageBlobId?: true;
    userId?: true;
    guestTokenId?: true;
    issueType?: true;
    severity?: true;
    updatedAt?: true;
};
export type IssueCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    latitude?: true;
    longitude?: true;
    status?: true;
    authorized?: true;
    error?: true;
    createdAt?: true;
    imageBlobId?: true;
    userId?: true;
    guestTokenId?: true;
    issueType?: true;
    severity?: true;
    updatedAt?: true;
    _all?: true;
};
export type IssueAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Issue to aggregate.
     */
    where?: Prisma.IssueWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Issues to fetch.
     */
    orderBy?: Prisma.IssueOrderByWithRelationInput | Prisma.IssueOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.IssueWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Issues from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Issues.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Issues
    **/
    _count?: true | IssueCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: IssueAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: IssueSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: IssueMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: IssueMaxAggregateInputType;
};
export type GetIssueAggregateType<T extends IssueAggregateArgs> = {
    [P in keyof T & keyof AggregateIssue]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateIssue[P]> : Prisma.GetScalarType<T[P], AggregateIssue[P]>;
};
export type IssueGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IssueWhereInput;
    orderBy?: Prisma.IssueOrderByWithAggregationInput | Prisma.IssueOrderByWithAggregationInput[];
    by: Prisma.IssueScalarFieldEnum[] | Prisma.IssueScalarFieldEnum;
    having?: Prisma.IssueScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: IssueCountAggregateInputType | true;
    _avg?: IssueAvgAggregateInputType;
    _sum?: IssueSumAggregateInputType;
    _min?: IssueMinAggregateInputType;
    _max?: IssueMaxAggregateInputType;
};
export type IssueGroupByOutputType = {
    id: number;
    title: string;
    description: string;
    latitude: number;
    longitude: number;
    status: $Enums.IssueStatus;
    authorized: $Enums.IssueAuthorized;
    error: $Enums.IssueError;
    createdAt: Date;
    imageBlobId: string | null;
    userId: number;
    guestTokenId: number | null;
    issueType: $Enums.IssueType;
    severity: number | null;
    updatedAt: Date;
    _count: IssueCountAggregateOutputType | null;
    _avg: IssueAvgAggregateOutputType | null;
    _sum: IssueSumAggregateOutputType | null;
    _min: IssueMinAggregateOutputType | null;
    _max: IssueMaxAggregateOutputType | null;
};
type GetIssueGroupByPayload<T extends IssueGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<IssueGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof IssueGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], IssueGroupByOutputType[P]> : Prisma.GetScalarType<T[P], IssueGroupByOutputType[P]>;
}>>;
export type IssueWhereInput = {
    AND?: Prisma.IssueWhereInput | Prisma.IssueWhereInput[];
    OR?: Prisma.IssueWhereInput[];
    NOT?: Prisma.IssueWhereInput | Prisma.IssueWhereInput[];
    id?: Prisma.IntFilter<"Issue"> | number;
    title?: Prisma.StringFilter<"Issue"> | string;
    description?: Prisma.StringFilter<"Issue"> | string;
    latitude?: Prisma.FloatFilter<"Issue"> | number;
    longitude?: Prisma.FloatFilter<"Issue"> | number;
    status?: Prisma.EnumIssueStatusFilter<"Issue"> | $Enums.IssueStatus;
    authorized?: Prisma.EnumIssueAuthorizedFilter<"Issue"> | $Enums.IssueAuthorized;
    error?: Prisma.EnumIssueErrorFilter<"Issue"> | $Enums.IssueError;
    createdAt?: Prisma.DateTimeFilter<"Issue"> | Date | string;
    imageBlobId?: Prisma.StringNullableFilter<"Issue"> | string | null;
    userId?: Prisma.IntFilter<"Issue"> | number;
    guestTokenId?: Prisma.IntNullableFilter<"Issue"> | number | null;
    issueType?: Prisma.EnumIssueTypeFilter<"Issue"> | $Enums.IssueType;
    severity?: Prisma.IntNullableFilter<"Issue"> | number | null;
    updatedAt?: Prisma.DateTimeFilter<"Issue"> | Date | string;
    comments?: Prisma.CommentListRelationFilter;
    guestToken?: Prisma.XOR<Prisma.GuestTokenNullableScalarRelationFilter, Prisma.GuestTokenWhereInput> | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    resolutionVotes?: Prisma.IssueResolutionVoteListRelationFilter;
    upvotes?: Prisma.IssueUpvoteListRelationFilter;
};
export type IssueOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    authorized?: Prisma.SortOrder;
    error?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    imageBlobId?: Prisma.SortOrderInput | Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    guestTokenId?: Prisma.SortOrderInput | Prisma.SortOrder;
    issueType?: Prisma.SortOrder;
    severity?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    comments?: Prisma.CommentOrderByRelationAggregateInput;
    guestToken?: Prisma.GuestTokenOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
    resolutionVotes?: Prisma.IssueResolutionVoteOrderByRelationAggregateInput;
    upvotes?: Prisma.IssueUpvoteOrderByRelationAggregateInput;
};
export type IssueWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.IssueWhereInput | Prisma.IssueWhereInput[];
    OR?: Prisma.IssueWhereInput[];
    NOT?: Prisma.IssueWhereInput | Prisma.IssueWhereInput[];
    title?: Prisma.StringFilter<"Issue"> | string;
    description?: Prisma.StringFilter<"Issue"> | string;
    latitude?: Prisma.FloatFilter<"Issue"> | number;
    longitude?: Prisma.FloatFilter<"Issue"> | number;
    status?: Prisma.EnumIssueStatusFilter<"Issue"> | $Enums.IssueStatus;
    authorized?: Prisma.EnumIssueAuthorizedFilter<"Issue"> | $Enums.IssueAuthorized;
    error?: Prisma.EnumIssueErrorFilter<"Issue"> | $Enums.IssueError;
    createdAt?: Prisma.DateTimeFilter<"Issue"> | Date | string;
    imageBlobId?: Prisma.StringNullableFilter<"Issue"> | string | null;
    userId?: Prisma.IntFilter<"Issue"> | number;
    guestTokenId?: Prisma.IntNullableFilter<"Issue"> | number | null;
    issueType?: Prisma.EnumIssueTypeFilter<"Issue"> | $Enums.IssueType;
    severity?: Prisma.IntNullableFilter<"Issue"> | number | null;
    updatedAt?: Prisma.DateTimeFilter<"Issue"> | Date | string;
    comments?: Prisma.CommentListRelationFilter;
    guestToken?: Prisma.XOR<Prisma.GuestTokenNullableScalarRelationFilter, Prisma.GuestTokenWhereInput> | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    resolutionVotes?: Prisma.IssueResolutionVoteListRelationFilter;
    upvotes?: Prisma.IssueUpvoteListRelationFilter;
}, "id">;
export type IssueOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    authorized?: Prisma.SortOrder;
    error?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    imageBlobId?: Prisma.SortOrderInput | Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    guestTokenId?: Prisma.SortOrderInput | Prisma.SortOrder;
    issueType?: Prisma.SortOrder;
    severity?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.IssueCountOrderByAggregateInput;
    _avg?: Prisma.IssueAvgOrderByAggregateInput;
    _max?: Prisma.IssueMaxOrderByAggregateInput;
    _min?: Prisma.IssueMinOrderByAggregateInput;
    _sum?: Prisma.IssueSumOrderByAggregateInput;
};
export type IssueScalarWhereWithAggregatesInput = {
    AND?: Prisma.IssueScalarWhereWithAggregatesInput | Prisma.IssueScalarWhereWithAggregatesInput[];
    OR?: Prisma.IssueScalarWhereWithAggregatesInput[];
    NOT?: Prisma.IssueScalarWhereWithAggregatesInput | Prisma.IssueScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Issue"> | number;
    title?: Prisma.StringWithAggregatesFilter<"Issue"> | string;
    description?: Prisma.StringWithAggregatesFilter<"Issue"> | string;
    latitude?: Prisma.FloatWithAggregatesFilter<"Issue"> | number;
    longitude?: Prisma.FloatWithAggregatesFilter<"Issue"> | number;
    status?: Prisma.EnumIssueStatusWithAggregatesFilter<"Issue"> | $Enums.IssueStatus;
    authorized?: Prisma.EnumIssueAuthorizedWithAggregatesFilter<"Issue"> | $Enums.IssueAuthorized;
    error?: Prisma.EnumIssueErrorWithAggregatesFilter<"Issue"> | $Enums.IssueError;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Issue"> | Date | string;
    imageBlobId?: Prisma.StringNullableWithAggregatesFilter<"Issue"> | string | null;
    userId?: Prisma.IntWithAggregatesFilter<"Issue"> | number;
    guestTokenId?: Prisma.IntNullableWithAggregatesFilter<"Issue"> | number | null;
    issueType?: Prisma.EnumIssueTypeWithAggregatesFilter<"Issue"> | $Enums.IssueType;
    severity?: Prisma.IntNullableWithAggregatesFilter<"Issue"> | number | null;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Issue"> | Date | string;
};
export type IssueCreateInput = {
    title: string;
    description: string;
    latitude: number;
    longitude: number;
    status?: $Enums.IssueStatus;
    authorized?: $Enums.IssueAuthorized;
    error?: $Enums.IssueError;
    createdAt?: Date | string;
    imageBlobId?: string | null;
    issueType: $Enums.IssueType;
    severity?: number | null;
    updatedAt?: Date | string;
    comments?: Prisma.CommentCreateNestedManyWithoutIssueInput;
    guestToken?: Prisma.GuestTokenCreateNestedOneWithoutIssuesInput;
    user: Prisma.UserCreateNestedOneWithoutIssuesInput;
    resolutionVotes?: Prisma.IssueResolutionVoteCreateNestedManyWithoutIssueInput;
    upvotes?: Prisma.IssueUpvoteCreateNestedManyWithoutIssueInput;
};
export type IssueUncheckedCreateInput = {
    id?: number;
    title: string;
    description: string;
    latitude: number;
    longitude: number;
    status?: $Enums.IssueStatus;
    authorized?: $Enums.IssueAuthorized;
    error?: $Enums.IssueError;
    createdAt?: Date | string;
    imageBlobId?: string | null;
    userId: number;
    guestTokenId?: number | null;
    issueType: $Enums.IssueType;
    severity?: number | null;
    updatedAt?: Date | string;
    comments?: Prisma.CommentUncheckedCreateNestedManyWithoutIssueInput;
    resolutionVotes?: Prisma.IssueResolutionVoteUncheckedCreateNestedManyWithoutIssueInput;
    upvotes?: Prisma.IssueUpvoteUncheckedCreateNestedManyWithoutIssueInput;
};
export type IssueUpdateInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.EnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus;
    authorized?: Prisma.EnumIssueAuthorizedFieldUpdateOperationsInput | $Enums.IssueAuthorized;
    error?: Prisma.EnumIssueErrorFieldUpdateOperationsInput | $Enums.IssueError;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    imageBlobId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    issueType?: Prisma.EnumIssueTypeFieldUpdateOperationsInput | $Enums.IssueType;
    severity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: Prisma.CommentUpdateManyWithoutIssueNestedInput;
    guestToken?: Prisma.GuestTokenUpdateOneWithoutIssuesNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutIssuesNestedInput;
    resolutionVotes?: Prisma.IssueResolutionVoteUpdateManyWithoutIssueNestedInput;
    upvotes?: Prisma.IssueUpvoteUpdateManyWithoutIssueNestedInput;
};
export type IssueUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.EnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus;
    authorized?: Prisma.EnumIssueAuthorizedFieldUpdateOperationsInput | $Enums.IssueAuthorized;
    error?: Prisma.EnumIssueErrorFieldUpdateOperationsInput | $Enums.IssueError;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    imageBlobId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    guestTokenId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    issueType?: Prisma.EnumIssueTypeFieldUpdateOperationsInput | $Enums.IssueType;
    severity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: Prisma.CommentUncheckedUpdateManyWithoutIssueNestedInput;
    resolutionVotes?: Prisma.IssueResolutionVoteUncheckedUpdateManyWithoutIssueNestedInput;
    upvotes?: Prisma.IssueUpvoteUncheckedUpdateManyWithoutIssueNestedInput;
};
export type IssueCreateManyInput = {
    id?: number;
    title: string;
    description: string;
    latitude: number;
    longitude: number;
    status?: $Enums.IssueStatus;
    authorized?: $Enums.IssueAuthorized;
    error?: $Enums.IssueError;
    createdAt?: Date | string;
    imageBlobId?: string | null;
    userId: number;
    guestTokenId?: number | null;
    issueType: $Enums.IssueType;
    severity?: number | null;
    updatedAt?: Date | string;
};
export type IssueUpdateManyMutationInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.EnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus;
    authorized?: Prisma.EnumIssueAuthorizedFieldUpdateOperationsInput | $Enums.IssueAuthorized;
    error?: Prisma.EnumIssueErrorFieldUpdateOperationsInput | $Enums.IssueError;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    imageBlobId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    issueType?: Prisma.EnumIssueTypeFieldUpdateOperationsInput | $Enums.IssueType;
    severity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IssueUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.EnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus;
    authorized?: Prisma.EnumIssueAuthorizedFieldUpdateOperationsInput | $Enums.IssueAuthorized;
    error?: Prisma.EnumIssueErrorFieldUpdateOperationsInput | $Enums.IssueError;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    imageBlobId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    guestTokenId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    issueType?: Prisma.EnumIssueTypeFieldUpdateOperationsInput | $Enums.IssueType;
    severity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IssueListRelationFilter = {
    every?: Prisma.IssueWhereInput;
    some?: Prisma.IssueWhereInput;
    none?: Prisma.IssueWhereInput;
};
export type IssueOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type IssueCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    authorized?: Prisma.SortOrder;
    error?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    imageBlobId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    guestTokenId?: Prisma.SortOrder;
    issueType?: Prisma.SortOrder;
    severity?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type IssueAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    guestTokenId?: Prisma.SortOrder;
    severity?: Prisma.SortOrder;
};
export type IssueMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    authorized?: Prisma.SortOrder;
    error?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    imageBlobId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    guestTokenId?: Prisma.SortOrder;
    issueType?: Prisma.SortOrder;
    severity?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type IssueMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    authorized?: Prisma.SortOrder;
    error?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    imageBlobId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    guestTokenId?: Prisma.SortOrder;
    issueType?: Prisma.SortOrder;
    severity?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type IssueSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    guestTokenId?: Prisma.SortOrder;
    severity?: Prisma.SortOrder;
};
export type IssueScalarRelationFilter = {
    is?: Prisma.IssueWhereInput;
    isNot?: Prisma.IssueWhereInput;
};
export type IssueCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.IssueCreateWithoutUserInput, Prisma.IssueUncheckedCreateWithoutUserInput> | Prisma.IssueCreateWithoutUserInput[] | Prisma.IssueUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.IssueCreateOrConnectWithoutUserInput | Prisma.IssueCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.IssueCreateManyUserInputEnvelope;
    connect?: Prisma.IssueWhereUniqueInput | Prisma.IssueWhereUniqueInput[];
};
export type IssueUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.IssueCreateWithoutUserInput, Prisma.IssueUncheckedCreateWithoutUserInput> | Prisma.IssueCreateWithoutUserInput[] | Prisma.IssueUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.IssueCreateOrConnectWithoutUserInput | Prisma.IssueCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.IssueCreateManyUserInputEnvelope;
    connect?: Prisma.IssueWhereUniqueInput | Prisma.IssueWhereUniqueInput[];
};
export type IssueUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.IssueCreateWithoutUserInput, Prisma.IssueUncheckedCreateWithoutUserInput> | Prisma.IssueCreateWithoutUserInput[] | Prisma.IssueUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.IssueCreateOrConnectWithoutUserInput | Prisma.IssueCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.IssueUpsertWithWhereUniqueWithoutUserInput | Prisma.IssueUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.IssueCreateManyUserInputEnvelope;
    set?: Prisma.IssueWhereUniqueInput | Prisma.IssueWhereUniqueInput[];
    disconnect?: Prisma.IssueWhereUniqueInput | Prisma.IssueWhereUniqueInput[];
    delete?: Prisma.IssueWhereUniqueInput | Prisma.IssueWhereUniqueInput[];
    connect?: Prisma.IssueWhereUniqueInput | Prisma.IssueWhereUniqueInput[];
    update?: Prisma.IssueUpdateWithWhereUniqueWithoutUserInput | Prisma.IssueUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.IssueUpdateManyWithWhereWithoutUserInput | Prisma.IssueUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.IssueScalarWhereInput | Prisma.IssueScalarWhereInput[];
};
export type IssueUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.IssueCreateWithoutUserInput, Prisma.IssueUncheckedCreateWithoutUserInput> | Prisma.IssueCreateWithoutUserInput[] | Prisma.IssueUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.IssueCreateOrConnectWithoutUserInput | Prisma.IssueCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.IssueUpsertWithWhereUniqueWithoutUserInput | Prisma.IssueUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.IssueCreateManyUserInputEnvelope;
    set?: Prisma.IssueWhereUniqueInput | Prisma.IssueWhereUniqueInput[];
    disconnect?: Prisma.IssueWhereUniqueInput | Prisma.IssueWhereUniqueInput[];
    delete?: Prisma.IssueWhereUniqueInput | Prisma.IssueWhereUniqueInput[];
    connect?: Prisma.IssueWhereUniqueInput | Prisma.IssueWhereUniqueInput[];
    update?: Prisma.IssueUpdateWithWhereUniqueWithoutUserInput | Prisma.IssueUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.IssueUpdateManyWithWhereWithoutUserInput | Prisma.IssueUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.IssueScalarWhereInput | Prisma.IssueScalarWhereInput[];
};
export type IssueCreateNestedManyWithoutGuestTokenInput = {
    create?: Prisma.XOR<Prisma.IssueCreateWithoutGuestTokenInput, Prisma.IssueUncheckedCreateWithoutGuestTokenInput> | Prisma.IssueCreateWithoutGuestTokenInput[] | Prisma.IssueUncheckedCreateWithoutGuestTokenInput[];
    connectOrCreate?: Prisma.IssueCreateOrConnectWithoutGuestTokenInput | Prisma.IssueCreateOrConnectWithoutGuestTokenInput[];
    createMany?: Prisma.IssueCreateManyGuestTokenInputEnvelope;
    connect?: Prisma.IssueWhereUniqueInput | Prisma.IssueWhereUniqueInput[];
};
export type IssueUncheckedCreateNestedManyWithoutGuestTokenInput = {
    create?: Prisma.XOR<Prisma.IssueCreateWithoutGuestTokenInput, Prisma.IssueUncheckedCreateWithoutGuestTokenInput> | Prisma.IssueCreateWithoutGuestTokenInput[] | Prisma.IssueUncheckedCreateWithoutGuestTokenInput[];
    connectOrCreate?: Prisma.IssueCreateOrConnectWithoutGuestTokenInput | Prisma.IssueCreateOrConnectWithoutGuestTokenInput[];
    createMany?: Prisma.IssueCreateManyGuestTokenInputEnvelope;
    connect?: Prisma.IssueWhereUniqueInput | Prisma.IssueWhereUniqueInput[];
};
export type IssueUpdateManyWithoutGuestTokenNestedInput = {
    create?: Prisma.XOR<Prisma.IssueCreateWithoutGuestTokenInput, Prisma.IssueUncheckedCreateWithoutGuestTokenInput> | Prisma.IssueCreateWithoutGuestTokenInput[] | Prisma.IssueUncheckedCreateWithoutGuestTokenInput[];
    connectOrCreate?: Prisma.IssueCreateOrConnectWithoutGuestTokenInput | Prisma.IssueCreateOrConnectWithoutGuestTokenInput[];
    upsert?: Prisma.IssueUpsertWithWhereUniqueWithoutGuestTokenInput | Prisma.IssueUpsertWithWhereUniqueWithoutGuestTokenInput[];
    createMany?: Prisma.IssueCreateManyGuestTokenInputEnvelope;
    set?: Prisma.IssueWhereUniqueInput | Prisma.IssueWhereUniqueInput[];
    disconnect?: Prisma.IssueWhereUniqueInput | Prisma.IssueWhereUniqueInput[];
    delete?: Prisma.IssueWhereUniqueInput | Prisma.IssueWhereUniqueInput[];
    connect?: Prisma.IssueWhereUniqueInput | Prisma.IssueWhereUniqueInput[];
    update?: Prisma.IssueUpdateWithWhereUniqueWithoutGuestTokenInput | Prisma.IssueUpdateWithWhereUniqueWithoutGuestTokenInput[];
    updateMany?: Prisma.IssueUpdateManyWithWhereWithoutGuestTokenInput | Prisma.IssueUpdateManyWithWhereWithoutGuestTokenInput[];
    deleteMany?: Prisma.IssueScalarWhereInput | Prisma.IssueScalarWhereInput[];
};
export type IssueUncheckedUpdateManyWithoutGuestTokenNestedInput = {
    create?: Prisma.XOR<Prisma.IssueCreateWithoutGuestTokenInput, Prisma.IssueUncheckedCreateWithoutGuestTokenInput> | Prisma.IssueCreateWithoutGuestTokenInput[] | Prisma.IssueUncheckedCreateWithoutGuestTokenInput[];
    connectOrCreate?: Prisma.IssueCreateOrConnectWithoutGuestTokenInput | Prisma.IssueCreateOrConnectWithoutGuestTokenInput[];
    upsert?: Prisma.IssueUpsertWithWhereUniqueWithoutGuestTokenInput | Prisma.IssueUpsertWithWhereUniqueWithoutGuestTokenInput[];
    createMany?: Prisma.IssueCreateManyGuestTokenInputEnvelope;
    set?: Prisma.IssueWhereUniqueInput | Prisma.IssueWhereUniqueInput[];
    disconnect?: Prisma.IssueWhereUniqueInput | Prisma.IssueWhereUniqueInput[];
    delete?: Prisma.IssueWhereUniqueInput | Prisma.IssueWhereUniqueInput[];
    connect?: Prisma.IssueWhereUniqueInput | Prisma.IssueWhereUniqueInput[];
    update?: Prisma.IssueUpdateWithWhereUniqueWithoutGuestTokenInput | Prisma.IssueUpdateWithWhereUniqueWithoutGuestTokenInput[];
    updateMany?: Prisma.IssueUpdateManyWithWhereWithoutGuestTokenInput | Prisma.IssueUpdateManyWithWhereWithoutGuestTokenInput[];
    deleteMany?: Prisma.IssueScalarWhereInput | Prisma.IssueScalarWhereInput[];
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type EnumIssueStatusFieldUpdateOperationsInput = {
    set?: $Enums.IssueStatus;
};
export type EnumIssueAuthorizedFieldUpdateOperationsInput = {
    set?: $Enums.IssueAuthorized;
};
export type EnumIssueErrorFieldUpdateOperationsInput = {
    set?: $Enums.IssueError;
};
export type EnumIssueTypeFieldUpdateOperationsInput = {
    set?: $Enums.IssueType;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type IssueCreateNestedOneWithoutUpvotesInput = {
    create?: Prisma.XOR<Prisma.IssueCreateWithoutUpvotesInput, Prisma.IssueUncheckedCreateWithoutUpvotesInput>;
    connectOrCreate?: Prisma.IssueCreateOrConnectWithoutUpvotesInput;
    connect?: Prisma.IssueWhereUniqueInput;
};
export type IssueUpdateOneRequiredWithoutUpvotesNestedInput = {
    create?: Prisma.XOR<Prisma.IssueCreateWithoutUpvotesInput, Prisma.IssueUncheckedCreateWithoutUpvotesInput>;
    connectOrCreate?: Prisma.IssueCreateOrConnectWithoutUpvotesInput;
    upsert?: Prisma.IssueUpsertWithoutUpvotesInput;
    connect?: Prisma.IssueWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.IssueUpdateToOneWithWhereWithoutUpvotesInput, Prisma.IssueUpdateWithoutUpvotesInput>, Prisma.IssueUncheckedUpdateWithoutUpvotesInput>;
};
export type IssueCreateNestedOneWithoutResolutionVotesInput = {
    create?: Prisma.XOR<Prisma.IssueCreateWithoutResolutionVotesInput, Prisma.IssueUncheckedCreateWithoutResolutionVotesInput>;
    connectOrCreate?: Prisma.IssueCreateOrConnectWithoutResolutionVotesInput;
    connect?: Prisma.IssueWhereUniqueInput;
};
export type IssueUpdateOneRequiredWithoutResolutionVotesNestedInput = {
    create?: Prisma.XOR<Prisma.IssueCreateWithoutResolutionVotesInput, Prisma.IssueUncheckedCreateWithoutResolutionVotesInput>;
    connectOrCreate?: Prisma.IssueCreateOrConnectWithoutResolutionVotesInput;
    upsert?: Prisma.IssueUpsertWithoutResolutionVotesInput;
    connect?: Prisma.IssueWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.IssueUpdateToOneWithWhereWithoutResolutionVotesInput, Prisma.IssueUpdateWithoutResolutionVotesInput>, Prisma.IssueUncheckedUpdateWithoutResolutionVotesInput>;
};
export type IssueCreateNestedOneWithoutCommentsInput = {
    create?: Prisma.XOR<Prisma.IssueCreateWithoutCommentsInput, Prisma.IssueUncheckedCreateWithoutCommentsInput>;
    connectOrCreate?: Prisma.IssueCreateOrConnectWithoutCommentsInput;
    connect?: Prisma.IssueWhereUniqueInput;
};
export type IssueUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: Prisma.XOR<Prisma.IssueCreateWithoutCommentsInput, Prisma.IssueUncheckedCreateWithoutCommentsInput>;
    connectOrCreate?: Prisma.IssueCreateOrConnectWithoutCommentsInput;
    upsert?: Prisma.IssueUpsertWithoutCommentsInput;
    connect?: Prisma.IssueWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.IssueUpdateToOneWithWhereWithoutCommentsInput, Prisma.IssueUpdateWithoutCommentsInput>, Prisma.IssueUncheckedUpdateWithoutCommentsInput>;
};
export type IssueCreateWithoutUserInput = {
    title: string;
    description: string;
    latitude: number;
    longitude: number;
    status?: $Enums.IssueStatus;
    authorized?: $Enums.IssueAuthorized;
    error?: $Enums.IssueError;
    createdAt?: Date | string;
    imageBlobId?: string | null;
    issueType: $Enums.IssueType;
    severity?: number | null;
    updatedAt?: Date | string;
    comments?: Prisma.CommentCreateNestedManyWithoutIssueInput;
    guestToken?: Prisma.GuestTokenCreateNestedOneWithoutIssuesInput;
    resolutionVotes?: Prisma.IssueResolutionVoteCreateNestedManyWithoutIssueInput;
    upvotes?: Prisma.IssueUpvoteCreateNestedManyWithoutIssueInput;
};
export type IssueUncheckedCreateWithoutUserInput = {
    id?: number;
    title: string;
    description: string;
    latitude: number;
    longitude: number;
    status?: $Enums.IssueStatus;
    authorized?: $Enums.IssueAuthorized;
    error?: $Enums.IssueError;
    createdAt?: Date | string;
    imageBlobId?: string | null;
    guestTokenId?: number | null;
    issueType: $Enums.IssueType;
    severity?: number | null;
    updatedAt?: Date | string;
    comments?: Prisma.CommentUncheckedCreateNestedManyWithoutIssueInput;
    resolutionVotes?: Prisma.IssueResolutionVoteUncheckedCreateNestedManyWithoutIssueInput;
    upvotes?: Prisma.IssueUpvoteUncheckedCreateNestedManyWithoutIssueInput;
};
export type IssueCreateOrConnectWithoutUserInput = {
    where: Prisma.IssueWhereUniqueInput;
    create: Prisma.XOR<Prisma.IssueCreateWithoutUserInput, Prisma.IssueUncheckedCreateWithoutUserInput>;
};
export type IssueCreateManyUserInputEnvelope = {
    data: Prisma.IssueCreateManyUserInput | Prisma.IssueCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type IssueUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.IssueWhereUniqueInput;
    update: Prisma.XOR<Prisma.IssueUpdateWithoutUserInput, Prisma.IssueUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.IssueCreateWithoutUserInput, Prisma.IssueUncheckedCreateWithoutUserInput>;
};
export type IssueUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.IssueWhereUniqueInput;
    data: Prisma.XOR<Prisma.IssueUpdateWithoutUserInput, Prisma.IssueUncheckedUpdateWithoutUserInput>;
};
export type IssueUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.IssueScalarWhereInput;
    data: Prisma.XOR<Prisma.IssueUpdateManyMutationInput, Prisma.IssueUncheckedUpdateManyWithoutUserInput>;
};
export type IssueScalarWhereInput = {
    AND?: Prisma.IssueScalarWhereInput | Prisma.IssueScalarWhereInput[];
    OR?: Prisma.IssueScalarWhereInput[];
    NOT?: Prisma.IssueScalarWhereInput | Prisma.IssueScalarWhereInput[];
    id?: Prisma.IntFilter<"Issue"> | number;
    title?: Prisma.StringFilter<"Issue"> | string;
    description?: Prisma.StringFilter<"Issue"> | string;
    latitude?: Prisma.FloatFilter<"Issue"> | number;
    longitude?: Prisma.FloatFilter<"Issue"> | number;
    status?: Prisma.EnumIssueStatusFilter<"Issue"> | $Enums.IssueStatus;
    authorized?: Prisma.EnumIssueAuthorizedFilter<"Issue"> | $Enums.IssueAuthorized;
    error?: Prisma.EnumIssueErrorFilter<"Issue"> | $Enums.IssueError;
    createdAt?: Prisma.DateTimeFilter<"Issue"> | Date | string;
    imageBlobId?: Prisma.StringNullableFilter<"Issue"> | string | null;
    userId?: Prisma.IntFilter<"Issue"> | number;
    guestTokenId?: Prisma.IntNullableFilter<"Issue"> | number | null;
    issueType?: Prisma.EnumIssueTypeFilter<"Issue"> | $Enums.IssueType;
    severity?: Prisma.IntNullableFilter<"Issue"> | number | null;
    updatedAt?: Prisma.DateTimeFilter<"Issue"> | Date | string;
};
export type IssueCreateWithoutGuestTokenInput = {
    title: string;
    description: string;
    latitude: number;
    longitude: number;
    status?: $Enums.IssueStatus;
    authorized?: $Enums.IssueAuthorized;
    error?: $Enums.IssueError;
    createdAt?: Date | string;
    imageBlobId?: string | null;
    issueType: $Enums.IssueType;
    severity?: number | null;
    updatedAt?: Date | string;
    comments?: Prisma.CommentCreateNestedManyWithoutIssueInput;
    user: Prisma.UserCreateNestedOneWithoutIssuesInput;
    resolutionVotes?: Prisma.IssueResolutionVoteCreateNestedManyWithoutIssueInput;
    upvotes?: Prisma.IssueUpvoteCreateNestedManyWithoutIssueInput;
};
export type IssueUncheckedCreateWithoutGuestTokenInput = {
    id?: number;
    title: string;
    description: string;
    latitude: number;
    longitude: number;
    status?: $Enums.IssueStatus;
    authorized?: $Enums.IssueAuthorized;
    error?: $Enums.IssueError;
    createdAt?: Date | string;
    imageBlobId?: string | null;
    userId: number;
    issueType: $Enums.IssueType;
    severity?: number | null;
    updatedAt?: Date | string;
    comments?: Prisma.CommentUncheckedCreateNestedManyWithoutIssueInput;
    resolutionVotes?: Prisma.IssueResolutionVoteUncheckedCreateNestedManyWithoutIssueInput;
    upvotes?: Prisma.IssueUpvoteUncheckedCreateNestedManyWithoutIssueInput;
};
export type IssueCreateOrConnectWithoutGuestTokenInput = {
    where: Prisma.IssueWhereUniqueInput;
    create: Prisma.XOR<Prisma.IssueCreateWithoutGuestTokenInput, Prisma.IssueUncheckedCreateWithoutGuestTokenInput>;
};
export type IssueCreateManyGuestTokenInputEnvelope = {
    data: Prisma.IssueCreateManyGuestTokenInput | Prisma.IssueCreateManyGuestTokenInput[];
    skipDuplicates?: boolean;
};
export type IssueUpsertWithWhereUniqueWithoutGuestTokenInput = {
    where: Prisma.IssueWhereUniqueInput;
    update: Prisma.XOR<Prisma.IssueUpdateWithoutGuestTokenInput, Prisma.IssueUncheckedUpdateWithoutGuestTokenInput>;
    create: Prisma.XOR<Prisma.IssueCreateWithoutGuestTokenInput, Prisma.IssueUncheckedCreateWithoutGuestTokenInput>;
};
export type IssueUpdateWithWhereUniqueWithoutGuestTokenInput = {
    where: Prisma.IssueWhereUniqueInput;
    data: Prisma.XOR<Prisma.IssueUpdateWithoutGuestTokenInput, Prisma.IssueUncheckedUpdateWithoutGuestTokenInput>;
};
export type IssueUpdateManyWithWhereWithoutGuestTokenInput = {
    where: Prisma.IssueScalarWhereInput;
    data: Prisma.XOR<Prisma.IssueUpdateManyMutationInput, Prisma.IssueUncheckedUpdateManyWithoutGuestTokenInput>;
};
export type IssueCreateWithoutUpvotesInput = {
    title: string;
    description: string;
    latitude: number;
    longitude: number;
    status?: $Enums.IssueStatus;
    authorized?: $Enums.IssueAuthorized;
    error?: $Enums.IssueError;
    createdAt?: Date | string;
    imageBlobId?: string | null;
    issueType: $Enums.IssueType;
    severity?: number | null;
    updatedAt?: Date | string;
    comments?: Prisma.CommentCreateNestedManyWithoutIssueInput;
    guestToken?: Prisma.GuestTokenCreateNestedOneWithoutIssuesInput;
    user: Prisma.UserCreateNestedOneWithoutIssuesInput;
    resolutionVotes?: Prisma.IssueResolutionVoteCreateNestedManyWithoutIssueInput;
};
export type IssueUncheckedCreateWithoutUpvotesInput = {
    id?: number;
    title: string;
    description: string;
    latitude: number;
    longitude: number;
    status?: $Enums.IssueStatus;
    authorized?: $Enums.IssueAuthorized;
    error?: $Enums.IssueError;
    createdAt?: Date | string;
    imageBlobId?: string | null;
    userId: number;
    guestTokenId?: number | null;
    issueType: $Enums.IssueType;
    severity?: number | null;
    updatedAt?: Date | string;
    comments?: Prisma.CommentUncheckedCreateNestedManyWithoutIssueInput;
    resolutionVotes?: Prisma.IssueResolutionVoteUncheckedCreateNestedManyWithoutIssueInput;
};
export type IssueCreateOrConnectWithoutUpvotesInput = {
    where: Prisma.IssueWhereUniqueInput;
    create: Prisma.XOR<Prisma.IssueCreateWithoutUpvotesInput, Prisma.IssueUncheckedCreateWithoutUpvotesInput>;
};
export type IssueUpsertWithoutUpvotesInput = {
    update: Prisma.XOR<Prisma.IssueUpdateWithoutUpvotesInput, Prisma.IssueUncheckedUpdateWithoutUpvotesInput>;
    create: Prisma.XOR<Prisma.IssueCreateWithoutUpvotesInput, Prisma.IssueUncheckedCreateWithoutUpvotesInput>;
    where?: Prisma.IssueWhereInput;
};
export type IssueUpdateToOneWithWhereWithoutUpvotesInput = {
    where?: Prisma.IssueWhereInput;
    data: Prisma.XOR<Prisma.IssueUpdateWithoutUpvotesInput, Prisma.IssueUncheckedUpdateWithoutUpvotesInput>;
};
export type IssueUpdateWithoutUpvotesInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.EnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus;
    authorized?: Prisma.EnumIssueAuthorizedFieldUpdateOperationsInput | $Enums.IssueAuthorized;
    error?: Prisma.EnumIssueErrorFieldUpdateOperationsInput | $Enums.IssueError;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    imageBlobId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    issueType?: Prisma.EnumIssueTypeFieldUpdateOperationsInput | $Enums.IssueType;
    severity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: Prisma.CommentUpdateManyWithoutIssueNestedInput;
    guestToken?: Prisma.GuestTokenUpdateOneWithoutIssuesNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutIssuesNestedInput;
    resolutionVotes?: Prisma.IssueResolutionVoteUpdateManyWithoutIssueNestedInput;
};
export type IssueUncheckedUpdateWithoutUpvotesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.EnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus;
    authorized?: Prisma.EnumIssueAuthorizedFieldUpdateOperationsInput | $Enums.IssueAuthorized;
    error?: Prisma.EnumIssueErrorFieldUpdateOperationsInput | $Enums.IssueError;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    imageBlobId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    guestTokenId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    issueType?: Prisma.EnumIssueTypeFieldUpdateOperationsInput | $Enums.IssueType;
    severity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: Prisma.CommentUncheckedUpdateManyWithoutIssueNestedInput;
    resolutionVotes?: Prisma.IssueResolutionVoteUncheckedUpdateManyWithoutIssueNestedInput;
};
export type IssueCreateWithoutResolutionVotesInput = {
    title: string;
    description: string;
    latitude: number;
    longitude: number;
    status?: $Enums.IssueStatus;
    authorized?: $Enums.IssueAuthorized;
    error?: $Enums.IssueError;
    createdAt?: Date | string;
    imageBlobId?: string | null;
    issueType: $Enums.IssueType;
    severity?: number | null;
    updatedAt?: Date | string;
    comments?: Prisma.CommentCreateNestedManyWithoutIssueInput;
    guestToken?: Prisma.GuestTokenCreateNestedOneWithoutIssuesInput;
    user: Prisma.UserCreateNestedOneWithoutIssuesInput;
    upvotes?: Prisma.IssueUpvoteCreateNestedManyWithoutIssueInput;
};
export type IssueUncheckedCreateWithoutResolutionVotesInput = {
    id?: number;
    title: string;
    description: string;
    latitude: number;
    longitude: number;
    status?: $Enums.IssueStatus;
    authorized?: $Enums.IssueAuthorized;
    error?: $Enums.IssueError;
    createdAt?: Date | string;
    imageBlobId?: string | null;
    userId: number;
    guestTokenId?: number | null;
    issueType: $Enums.IssueType;
    severity?: number | null;
    updatedAt?: Date | string;
    comments?: Prisma.CommentUncheckedCreateNestedManyWithoutIssueInput;
    upvotes?: Prisma.IssueUpvoteUncheckedCreateNestedManyWithoutIssueInput;
};
export type IssueCreateOrConnectWithoutResolutionVotesInput = {
    where: Prisma.IssueWhereUniqueInput;
    create: Prisma.XOR<Prisma.IssueCreateWithoutResolutionVotesInput, Prisma.IssueUncheckedCreateWithoutResolutionVotesInput>;
};
export type IssueUpsertWithoutResolutionVotesInput = {
    update: Prisma.XOR<Prisma.IssueUpdateWithoutResolutionVotesInput, Prisma.IssueUncheckedUpdateWithoutResolutionVotesInput>;
    create: Prisma.XOR<Prisma.IssueCreateWithoutResolutionVotesInput, Prisma.IssueUncheckedCreateWithoutResolutionVotesInput>;
    where?: Prisma.IssueWhereInput;
};
export type IssueUpdateToOneWithWhereWithoutResolutionVotesInput = {
    where?: Prisma.IssueWhereInput;
    data: Prisma.XOR<Prisma.IssueUpdateWithoutResolutionVotesInput, Prisma.IssueUncheckedUpdateWithoutResolutionVotesInput>;
};
export type IssueUpdateWithoutResolutionVotesInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.EnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus;
    authorized?: Prisma.EnumIssueAuthorizedFieldUpdateOperationsInput | $Enums.IssueAuthorized;
    error?: Prisma.EnumIssueErrorFieldUpdateOperationsInput | $Enums.IssueError;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    imageBlobId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    issueType?: Prisma.EnumIssueTypeFieldUpdateOperationsInput | $Enums.IssueType;
    severity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: Prisma.CommentUpdateManyWithoutIssueNestedInput;
    guestToken?: Prisma.GuestTokenUpdateOneWithoutIssuesNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutIssuesNestedInput;
    upvotes?: Prisma.IssueUpvoteUpdateManyWithoutIssueNestedInput;
};
export type IssueUncheckedUpdateWithoutResolutionVotesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.EnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus;
    authorized?: Prisma.EnumIssueAuthorizedFieldUpdateOperationsInput | $Enums.IssueAuthorized;
    error?: Prisma.EnumIssueErrorFieldUpdateOperationsInput | $Enums.IssueError;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    imageBlobId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    guestTokenId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    issueType?: Prisma.EnumIssueTypeFieldUpdateOperationsInput | $Enums.IssueType;
    severity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: Prisma.CommentUncheckedUpdateManyWithoutIssueNestedInput;
    upvotes?: Prisma.IssueUpvoteUncheckedUpdateManyWithoutIssueNestedInput;
};
export type IssueCreateWithoutCommentsInput = {
    title: string;
    description: string;
    latitude: number;
    longitude: number;
    status?: $Enums.IssueStatus;
    authorized?: $Enums.IssueAuthorized;
    error?: $Enums.IssueError;
    createdAt?: Date | string;
    imageBlobId?: string | null;
    issueType: $Enums.IssueType;
    severity?: number | null;
    updatedAt?: Date | string;
    guestToken?: Prisma.GuestTokenCreateNestedOneWithoutIssuesInput;
    user: Prisma.UserCreateNestedOneWithoutIssuesInput;
    resolutionVotes?: Prisma.IssueResolutionVoteCreateNestedManyWithoutIssueInput;
    upvotes?: Prisma.IssueUpvoteCreateNestedManyWithoutIssueInput;
};
export type IssueUncheckedCreateWithoutCommentsInput = {
    id?: number;
    title: string;
    description: string;
    latitude: number;
    longitude: number;
    status?: $Enums.IssueStatus;
    authorized?: $Enums.IssueAuthorized;
    error?: $Enums.IssueError;
    createdAt?: Date | string;
    imageBlobId?: string | null;
    userId: number;
    guestTokenId?: number | null;
    issueType: $Enums.IssueType;
    severity?: number | null;
    updatedAt?: Date | string;
    resolutionVotes?: Prisma.IssueResolutionVoteUncheckedCreateNestedManyWithoutIssueInput;
    upvotes?: Prisma.IssueUpvoteUncheckedCreateNestedManyWithoutIssueInput;
};
export type IssueCreateOrConnectWithoutCommentsInput = {
    where: Prisma.IssueWhereUniqueInput;
    create: Prisma.XOR<Prisma.IssueCreateWithoutCommentsInput, Prisma.IssueUncheckedCreateWithoutCommentsInput>;
};
export type IssueUpsertWithoutCommentsInput = {
    update: Prisma.XOR<Prisma.IssueUpdateWithoutCommentsInput, Prisma.IssueUncheckedUpdateWithoutCommentsInput>;
    create: Prisma.XOR<Prisma.IssueCreateWithoutCommentsInput, Prisma.IssueUncheckedCreateWithoutCommentsInput>;
    where?: Prisma.IssueWhereInput;
};
export type IssueUpdateToOneWithWhereWithoutCommentsInput = {
    where?: Prisma.IssueWhereInput;
    data: Prisma.XOR<Prisma.IssueUpdateWithoutCommentsInput, Prisma.IssueUncheckedUpdateWithoutCommentsInput>;
};
export type IssueUpdateWithoutCommentsInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.EnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus;
    authorized?: Prisma.EnumIssueAuthorizedFieldUpdateOperationsInput | $Enums.IssueAuthorized;
    error?: Prisma.EnumIssueErrorFieldUpdateOperationsInput | $Enums.IssueError;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    imageBlobId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    issueType?: Prisma.EnumIssueTypeFieldUpdateOperationsInput | $Enums.IssueType;
    severity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    guestToken?: Prisma.GuestTokenUpdateOneWithoutIssuesNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutIssuesNestedInput;
    resolutionVotes?: Prisma.IssueResolutionVoteUpdateManyWithoutIssueNestedInput;
    upvotes?: Prisma.IssueUpvoteUpdateManyWithoutIssueNestedInput;
};
export type IssueUncheckedUpdateWithoutCommentsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.EnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus;
    authorized?: Prisma.EnumIssueAuthorizedFieldUpdateOperationsInput | $Enums.IssueAuthorized;
    error?: Prisma.EnumIssueErrorFieldUpdateOperationsInput | $Enums.IssueError;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    imageBlobId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    guestTokenId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    issueType?: Prisma.EnumIssueTypeFieldUpdateOperationsInput | $Enums.IssueType;
    severity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resolutionVotes?: Prisma.IssueResolutionVoteUncheckedUpdateManyWithoutIssueNestedInput;
    upvotes?: Prisma.IssueUpvoteUncheckedUpdateManyWithoutIssueNestedInput;
};
export type IssueCreateManyUserInput = {
    id?: number;
    title: string;
    description: string;
    latitude: number;
    longitude: number;
    status?: $Enums.IssueStatus;
    authorized?: $Enums.IssueAuthorized;
    error?: $Enums.IssueError;
    createdAt?: Date | string;
    imageBlobId?: string | null;
    guestTokenId?: number | null;
    issueType: $Enums.IssueType;
    severity?: number | null;
    updatedAt?: Date | string;
};
export type IssueUpdateWithoutUserInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.EnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus;
    authorized?: Prisma.EnumIssueAuthorizedFieldUpdateOperationsInput | $Enums.IssueAuthorized;
    error?: Prisma.EnumIssueErrorFieldUpdateOperationsInput | $Enums.IssueError;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    imageBlobId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    issueType?: Prisma.EnumIssueTypeFieldUpdateOperationsInput | $Enums.IssueType;
    severity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: Prisma.CommentUpdateManyWithoutIssueNestedInput;
    guestToken?: Prisma.GuestTokenUpdateOneWithoutIssuesNestedInput;
    resolutionVotes?: Prisma.IssueResolutionVoteUpdateManyWithoutIssueNestedInput;
    upvotes?: Prisma.IssueUpvoteUpdateManyWithoutIssueNestedInput;
};
export type IssueUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.EnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus;
    authorized?: Prisma.EnumIssueAuthorizedFieldUpdateOperationsInput | $Enums.IssueAuthorized;
    error?: Prisma.EnumIssueErrorFieldUpdateOperationsInput | $Enums.IssueError;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    imageBlobId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    guestTokenId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    issueType?: Prisma.EnumIssueTypeFieldUpdateOperationsInput | $Enums.IssueType;
    severity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: Prisma.CommentUncheckedUpdateManyWithoutIssueNestedInput;
    resolutionVotes?: Prisma.IssueResolutionVoteUncheckedUpdateManyWithoutIssueNestedInput;
    upvotes?: Prisma.IssueUpvoteUncheckedUpdateManyWithoutIssueNestedInput;
};
export type IssueUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.EnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus;
    authorized?: Prisma.EnumIssueAuthorizedFieldUpdateOperationsInput | $Enums.IssueAuthorized;
    error?: Prisma.EnumIssueErrorFieldUpdateOperationsInput | $Enums.IssueError;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    imageBlobId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    guestTokenId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    issueType?: Prisma.EnumIssueTypeFieldUpdateOperationsInput | $Enums.IssueType;
    severity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IssueCreateManyGuestTokenInput = {
    id?: number;
    title: string;
    description: string;
    latitude: number;
    longitude: number;
    status?: $Enums.IssueStatus;
    authorized?: $Enums.IssueAuthorized;
    error?: $Enums.IssueError;
    createdAt?: Date | string;
    imageBlobId?: string | null;
    userId: number;
    issueType: $Enums.IssueType;
    severity?: number | null;
    updatedAt?: Date | string;
};
export type IssueUpdateWithoutGuestTokenInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.EnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus;
    authorized?: Prisma.EnumIssueAuthorizedFieldUpdateOperationsInput | $Enums.IssueAuthorized;
    error?: Prisma.EnumIssueErrorFieldUpdateOperationsInput | $Enums.IssueError;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    imageBlobId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    issueType?: Prisma.EnumIssueTypeFieldUpdateOperationsInput | $Enums.IssueType;
    severity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: Prisma.CommentUpdateManyWithoutIssueNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutIssuesNestedInput;
    resolutionVotes?: Prisma.IssueResolutionVoteUpdateManyWithoutIssueNestedInput;
    upvotes?: Prisma.IssueUpvoteUpdateManyWithoutIssueNestedInput;
};
export type IssueUncheckedUpdateWithoutGuestTokenInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.EnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus;
    authorized?: Prisma.EnumIssueAuthorizedFieldUpdateOperationsInput | $Enums.IssueAuthorized;
    error?: Prisma.EnumIssueErrorFieldUpdateOperationsInput | $Enums.IssueError;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    imageBlobId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    issueType?: Prisma.EnumIssueTypeFieldUpdateOperationsInput | $Enums.IssueType;
    severity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: Prisma.CommentUncheckedUpdateManyWithoutIssueNestedInput;
    resolutionVotes?: Prisma.IssueResolutionVoteUncheckedUpdateManyWithoutIssueNestedInput;
    upvotes?: Prisma.IssueUpvoteUncheckedUpdateManyWithoutIssueNestedInput;
};
export type IssueUncheckedUpdateManyWithoutGuestTokenInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    status?: Prisma.EnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus;
    authorized?: Prisma.EnumIssueAuthorizedFieldUpdateOperationsInput | $Enums.IssueAuthorized;
    error?: Prisma.EnumIssueErrorFieldUpdateOperationsInput | $Enums.IssueError;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    imageBlobId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    issueType?: Prisma.EnumIssueTypeFieldUpdateOperationsInput | $Enums.IssueType;
    severity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type IssueCountOutputType
 */
export type IssueCountOutputType = {
    comments: number;
    resolutionVotes: number;
    upvotes: number;
};
export type IssueCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    comments?: boolean | IssueCountOutputTypeCountCommentsArgs;
    resolutionVotes?: boolean | IssueCountOutputTypeCountResolutionVotesArgs;
    upvotes?: boolean | IssueCountOutputTypeCountUpvotesArgs;
};
/**
 * IssueCountOutputType without action
 */
export type IssueCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueCountOutputType
     */
    select?: Prisma.IssueCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * IssueCountOutputType without action
 */
export type IssueCountOutputTypeCountCommentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CommentWhereInput;
};
/**
 * IssueCountOutputType without action
 */
export type IssueCountOutputTypeCountResolutionVotesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IssueResolutionVoteWhereInput;
};
/**
 * IssueCountOutputType without action
 */
export type IssueCountOutputTypeCountUpvotesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IssueUpvoteWhereInput;
};
export type IssueSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    status?: boolean;
    authorized?: boolean;
    error?: boolean;
    createdAt?: boolean;
    imageBlobId?: boolean;
    userId?: boolean;
    guestTokenId?: boolean;
    issueType?: boolean;
    severity?: boolean;
    updatedAt?: boolean;
    comments?: boolean | Prisma.Issue$commentsArgs<ExtArgs>;
    guestToken?: boolean | Prisma.Issue$guestTokenArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    resolutionVotes?: boolean | Prisma.Issue$resolutionVotesArgs<ExtArgs>;
    upvotes?: boolean | Prisma.Issue$upvotesArgs<ExtArgs>;
    _count?: boolean | Prisma.IssueCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["issue"]>;
export type IssueSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    status?: boolean;
    authorized?: boolean;
    error?: boolean;
    createdAt?: boolean;
    imageBlobId?: boolean;
    userId?: boolean;
    guestTokenId?: boolean;
    issueType?: boolean;
    severity?: boolean;
    updatedAt?: boolean;
    guestToken?: boolean | Prisma.Issue$guestTokenArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["issue"]>;
export type IssueSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    status?: boolean;
    authorized?: boolean;
    error?: boolean;
    createdAt?: boolean;
    imageBlobId?: boolean;
    userId?: boolean;
    guestTokenId?: boolean;
    issueType?: boolean;
    severity?: boolean;
    updatedAt?: boolean;
    guestToken?: boolean | Prisma.Issue$guestTokenArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["issue"]>;
export type IssueSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    status?: boolean;
    authorized?: boolean;
    error?: boolean;
    createdAt?: boolean;
    imageBlobId?: boolean;
    userId?: boolean;
    guestTokenId?: boolean;
    issueType?: boolean;
    severity?: boolean;
    updatedAt?: boolean;
};
export type IssueOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "description" | "latitude" | "longitude" | "status" | "authorized" | "error" | "createdAt" | "imageBlobId" | "userId" | "guestTokenId" | "issueType" | "severity" | "updatedAt", ExtArgs["result"]["issue"]>;
export type IssueInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    comments?: boolean | Prisma.Issue$commentsArgs<ExtArgs>;
    guestToken?: boolean | Prisma.Issue$guestTokenArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    resolutionVotes?: boolean | Prisma.Issue$resolutionVotesArgs<ExtArgs>;
    upvotes?: boolean | Prisma.Issue$upvotesArgs<ExtArgs>;
    _count?: boolean | Prisma.IssueCountOutputTypeDefaultArgs<ExtArgs>;
};
export type IssueIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    guestToken?: boolean | Prisma.Issue$guestTokenArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type IssueIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    guestToken?: boolean | Prisma.Issue$guestTokenArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $IssuePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Issue";
    objects: {
        comments: Prisma.$CommentPayload<ExtArgs>[];
        guestToken: Prisma.$GuestTokenPayload<ExtArgs> | null;
        user: Prisma.$UserPayload<ExtArgs>;
        resolutionVotes: Prisma.$IssueResolutionVotePayload<ExtArgs>[];
        upvotes: Prisma.$IssueUpvotePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        title: string;
        description: string;
        latitude: number;
        longitude: number;
        status: $Enums.IssueStatus;
        authorized: $Enums.IssueAuthorized;
        error: $Enums.IssueError;
        createdAt: Date;
        imageBlobId: string | null;
        userId: number;
        guestTokenId: number | null;
        issueType: $Enums.IssueType;
        severity: number | null;
        updatedAt: Date;
    }, ExtArgs["result"]["issue"]>;
    composites: {};
};
export type IssueGetPayload<S extends boolean | null | undefined | IssueDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$IssuePayload, S>;
export type IssueCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<IssueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: IssueCountAggregateInputType | true;
};
export interface IssueDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Issue'];
        meta: {
            name: 'Issue';
        };
    };
    /**
     * Find zero or one Issue that matches the filter.
     * @param {IssueFindUniqueArgs} args - Arguments to find a Issue
     * @example
     * // Get one Issue
     * const issue = await prisma.issue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IssueFindUniqueArgs>(args: Prisma.SelectSubset<T, IssueFindUniqueArgs<ExtArgs>>): Prisma.Prisma__IssueClient<runtime.Types.Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Issue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IssueFindUniqueOrThrowArgs} args - Arguments to find a Issue
     * @example
     * // Get one Issue
     * const issue = await prisma.issue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IssueFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, IssueFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__IssueClient<runtime.Types.Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Issue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueFindFirstArgs} args - Arguments to find a Issue
     * @example
     * // Get one Issue
     * const issue = await prisma.issue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IssueFindFirstArgs>(args?: Prisma.SelectSubset<T, IssueFindFirstArgs<ExtArgs>>): Prisma.Prisma__IssueClient<runtime.Types.Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Issue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueFindFirstOrThrowArgs} args - Arguments to find a Issue
     * @example
     * // Get one Issue
     * const issue = await prisma.issue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IssueFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, IssueFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__IssueClient<runtime.Types.Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Issues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Issues
     * const issues = await prisma.issue.findMany()
     *
     * // Get first 10 Issues
     * const issues = await prisma.issue.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const issueWithIdOnly = await prisma.issue.findMany({ select: { id: true } })
     *
     */
    findMany<T extends IssueFindManyArgs>(args?: Prisma.SelectSubset<T, IssueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Issue.
     * @param {IssueCreateArgs} args - Arguments to create a Issue.
     * @example
     * // Create one Issue
     * const Issue = await prisma.issue.create({
     *   data: {
     *     // ... data to create a Issue
     *   }
     * })
     *
     */
    create<T extends IssueCreateArgs>(args: Prisma.SelectSubset<T, IssueCreateArgs<ExtArgs>>): Prisma.Prisma__IssueClient<runtime.Types.Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Issues.
     * @param {IssueCreateManyArgs} args - Arguments to create many Issues.
     * @example
     * // Create many Issues
     * const issue = await prisma.issue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends IssueCreateManyArgs>(args?: Prisma.SelectSubset<T, IssueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Issues and returns the data saved in the database.
     * @param {IssueCreateManyAndReturnArgs} args - Arguments to create many Issues.
     * @example
     * // Create many Issues
     * const issue = await prisma.issue.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Issues and only return the `id`
     * const issueWithIdOnly = await prisma.issue.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends IssueCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, IssueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Issue.
     * @param {IssueDeleteArgs} args - Arguments to delete one Issue.
     * @example
     * // Delete one Issue
     * const Issue = await prisma.issue.delete({
     *   where: {
     *     // ... filter to delete one Issue
     *   }
     * })
     *
     */
    delete<T extends IssueDeleteArgs>(args: Prisma.SelectSubset<T, IssueDeleteArgs<ExtArgs>>): Prisma.Prisma__IssueClient<runtime.Types.Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Issue.
     * @param {IssueUpdateArgs} args - Arguments to update one Issue.
     * @example
     * // Update one Issue
     * const issue = await prisma.issue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends IssueUpdateArgs>(args: Prisma.SelectSubset<T, IssueUpdateArgs<ExtArgs>>): Prisma.Prisma__IssueClient<runtime.Types.Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Issues.
     * @param {IssueDeleteManyArgs} args - Arguments to filter Issues to delete.
     * @example
     * // Delete a few Issues
     * const { count } = await prisma.issue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends IssueDeleteManyArgs>(args?: Prisma.SelectSubset<T, IssueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Issues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Issues
     * const issue = await prisma.issue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends IssueUpdateManyArgs>(args: Prisma.SelectSubset<T, IssueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Issues and returns the data updated in the database.
     * @param {IssueUpdateManyAndReturnArgs} args - Arguments to update many Issues.
     * @example
     * // Update many Issues
     * const issue = await prisma.issue.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Issues and only return the `id`
     * const issueWithIdOnly = await prisma.issue.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends IssueUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, IssueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Issue.
     * @param {IssueUpsertArgs} args - Arguments to update or create a Issue.
     * @example
     * // Update or create a Issue
     * const issue = await prisma.issue.upsert({
     *   create: {
     *     // ... data to create a Issue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Issue we want to update
     *   }
     * })
     */
    upsert<T extends IssueUpsertArgs>(args: Prisma.SelectSubset<T, IssueUpsertArgs<ExtArgs>>): Prisma.Prisma__IssueClient<runtime.Types.Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Issues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueCountArgs} args - Arguments to filter Issues to count.
     * @example
     * // Count the number of Issues
     * const count = await prisma.issue.count({
     *   where: {
     *     // ... the filter for the Issues we want to count
     *   }
     * })
    **/
    count<T extends IssueCountArgs>(args?: Prisma.Subset<T, IssueCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], IssueCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Issue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IssueAggregateArgs>(args: Prisma.Subset<T, IssueAggregateArgs>): Prisma.PrismaPromise<GetIssueAggregateType<T>>;
    /**
     * Group by Issue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends IssueGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: IssueGroupByArgs['orderBy'];
    } : {
        orderBy?: IssueGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, IssueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIssueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Issue model
     */
    readonly fields: IssueFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Issue.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__IssueClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    comments<T extends Prisma.Issue$commentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Issue$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    guestToken<T extends Prisma.Issue$guestTokenArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Issue$guestTokenArgs<ExtArgs>>): Prisma.Prisma__GuestTokenClient<runtime.Types.Result.GetResult<Prisma.$GuestTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    resolutionVotes<T extends Prisma.Issue$resolutionVotesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Issue$resolutionVotesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IssueResolutionVotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    upvotes<T extends Prisma.Issue$upvotesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Issue$upvotesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IssueUpvotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Issue model
 */
export interface IssueFieldRefs {
    readonly id: Prisma.FieldRef<"Issue", 'Int'>;
    readonly title: Prisma.FieldRef<"Issue", 'String'>;
    readonly description: Prisma.FieldRef<"Issue", 'String'>;
    readonly latitude: Prisma.FieldRef<"Issue", 'Float'>;
    readonly longitude: Prisma.FieldRef<"Issue", 'Float'>;
    readonly status: Prisma.FieldRef<"Issue", 'IssueStatus'>;
    readonly authorized: Prisma.FieldRef<"Issue", 'IssueAuthorized'>;
    readonly error: Prisma.FieldRef<"Issue", 'IssueError'>;
    readonly createdAt: Prisma.FieldRef<"Issue", 'DateTime'>;
    readonly imageBlobId: Prisma.FieldRef<"Issue", 'String'>;
    readonly userId: Prisma.FieldRef<"Issue", 'Int'>;
    readonly guestTokenId: Prisma.FieldRef<"Issue", 'Int'>;
    readonly issueType: Prisma.FieldRef<"Issue", 'IssueType'>;
    readonly severity: Prisma.FieldRef<"Issue", 'Int'>;
    readonly updatedAt: Prisma.FieldRef<"Issue", 'DateTime'>;
}
/**
 * Issue findUnique
 */
export type IssueFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: Prisma.IssueSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Issue
     */
    omit?: Prisma.IssueOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.IssueInclude<ExtArgs> | null;
    /**
     * Filter, which Issue to fetch.
     */
    where: Prisma.IssueWhereUniqueInput;
};
/**
 * Issue findUniqueOrThrow
 */
export type IssueFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: Prisma.IssueSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Issue
     */
    omit?: Prisma.IssueOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.IssueInclude<ExtArgs> | null;
    /**
     * Filter, which Issue to fetch.
     */
    where: Prisma.IssueWhereUniqueInput;
};
/**
 * Issue findFirst
 */
export type IssueFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: Prisma.IssueSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Issue
     */
    omit?: Prisma.IssueOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.IssueInclude<ExtArgs> | null;
    /**
     * Filter, which Issue to fetch.
     */
    where?: Prisma.IssueWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Issues to fetch.
     */
    orderBy?: Prisma.IssueOrderByWithRelationInput | Prisma.IssueOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Issues.
     */
    cursor?: Prisma.IssueWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Issues from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Issues.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Issues.
     */
    distinct?: Prisma.IssueScalarFieldEnum | Prisma.IssueScalarFieldEnum[];
};
/**
 * Issue findFirstOrThrow
 */
export type IssueFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: Prisma.IssueSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Issue
     */
    omit?: Prisma.IssueOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.IssueInclude<ExtArgs> | null;
    /**
     * Filter, which Issue to fetch.
     */
    where?: Prisma.IssueWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Issues to fetch.
     */
    orderBy?: Prisma.IssueOrderByWithRelationInput | Prisma.IssueOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Issues.
     */
    cursor?: Prisma.IssueWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Issues from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Issues.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Issues.
     */
    distinct?: Prisma.IssueScalarFieldEnum | Prisma.IssueScalarFieldEnum[];
};
/**
 * Issue findMany
 */
export type IssueFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: Prisma.IssueSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Issue
     */
    omit?: Prisma.IssueOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.IssueInclude<ExtArgs> | null;
    /**
     * Filter, which Issues to fetch.
     */
    where?: Prisma.IssueWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Issues to fetch.
     */
    orderBy?: Prisma.IssueOrderByWithRelationInput | Prisma.IssueOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Issues.
     */
    cursor?: Prisma.IssueWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Issues from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Issues.
     */
    skip?: number;
    distinct?: Prisma.IssueScalarFieldEnum | Prisma.IssueScalarFieldEnum[];
};
/**
 * Issue create
 */
export type IssueCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: Prisma.IssueSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Issue
     */
    omit?: Prisma.IssueOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.IssueInclude<ExtArgs> | null;
    /**
     * The data needed to create a Issue.
     */
    data: Prisma.XOR<Prisma.IssueCreateInput, Prisma.IssueUncheckedCreateInput>;
};
/**
 * Issue createMany
 */
export type IssueCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Issues.
     */
    data: Prisma.IssueCreateManyInput | Prisma.IssueCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Issue createManyAndReturn
 */
export type IssueCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: Prisma.IssueSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Issue
     */
    omit?: Prisma.IssueOmit<ExtArgs> | null;
    /**
     * The data used to create many Issues.
     */
    data: Prisma.IssueCreateManyInput | Prisma.IssueCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.IssueIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Issue update
 */
export type IssueUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: Prisma.IssueSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Issue
     */
    omit?: Prisma.IssueOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.IssueInclude<ExtArgs> | null;
    /**
     * The data needed to update a Issue.
     */
    data: Prisma.XOR<Prisma.IssueUpdateInput, Prisma.IssueUncheckedUpdateInput>;
    /**
     * Choose, which Issue to update.
     */
    where: Prisma.IssueWhereUniqueInput;
};
/**
 * Issue updateMany
 */
export type IssueUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Issues.
     */
    data: Prisma.XOR<Prisma.IssueUpdateManyMutationInput, Prisma.IssueUncheckedUpdateManyInput>;
    /**
     * Filter which Issues to update
     */
    where?: Prisma.IssueWhereInput;
    /**
     * Limit how many Issues to update.
     */
    limit?: number;
};
/**
 * Issue updateManyAndReturn
 */
export type IssueUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: Prisma.IssueSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Issue
     */
    omit?: Prisma.IssueOmit<ExtArgs> | null;
    /**
     * The data used to update Issues.
     */
    data: Prisma.XOR<Prisma.IssueUpdateManyMutationInput, Prisma.IssueUncheckedUpdateManyInput>;
    /**
     * Filter which Issues to update
     */
    where?: Prisma.IssueWhereInput;
    /**
     * Limit how many Issues to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.IssueIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Issue upsert
 */
export type IssueUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: Prisma.IssueSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Issue
     */
    omit?: Prisma.IssueOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.IssueInclude<ExtArgs> | null;
    /**
     * The filter to search for the Issue to update in case it exists.
     */
    where: Prisma.IssueWhereUniqueInput;
    /**
     * In case the Issue found by the `where` argument doesn't exist, create a new Issue with this data.
     */
    create: Prisma.XOR<Prisma.IssueCreateInput, Prisma.IssueUncheckedCreateInput>;
    /**
     * In case the Issue was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.IssueUpdateInput, Prisma.IssueUncheckedUpdateInput>;
};
/**
 * Issue delete
 */
export type IssueDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: Prisma.IssueSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Issue
     */
    omit?: Prisma.IssueOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.IssueInclude<ExtArgs> | null;
    /**
     * Filter which Issue to delete.
     */
    where: Prisma.IssueWhereUniqueInput;
};
/**
 * Issue deleteMany
 */
export type IssueDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Issues to delete
     */
    where?: Prisma.IssueWhereInput;
    /**
     * Limit how many Issues to delete.
     */
    limit?: number;
};
/**
 * Issue.comments
 */
export type Issue$commentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: Prisma.CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: Prisma.CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CommentInclude<ExtArgs> | null;
    where?: Prisma.CommentWhereInput;
    orderBy?: Prisma.CommentOrderByWithRelationInput | Prisma.CommentOrderByWithRelationInput[];
    cursor?: Prisma.CommentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CommentScalarFieldEnum | Prisma.CommentScalarFieldEnum[];
};
/**
 * Issue.guestToken
 */
export type Issue$guestTokenArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuestToken
     */
    select?: Prisma.GuestTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GuestToken
     */
    omit?: Prisma.GuestTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GuestTokenInclude<ExtArgs> | null;
    where?: Prisma.GuestTokenWhereInput;
};
/**
 * Issue.resolutionVotes
 */
export type Issue$resolutionVotesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueResolutionVote
     */
    select?: Prisma.IssueResolutionVoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the IssueResolutionVote
     */
    omit?: Prisma.IssueResolutionVoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.IssueResolutionVoteInclude<ExtArgs> | null;
    where?: Prisma.IssueResolutionVoteWhereInput;
    orderBy?: Prisma.IssueResolutionVoteOrderByWithRelationInput | Prisma.IssueResolutionVoteOrderByWithRelationInput[];
    cursor?: Prisma.IssueResolutionVoteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.IssueResolutionVoteScalarFieldEnum | Prisma.IssueResolutionVoteScalarFieldEnum[];
};
/**
 * Issue.upvotes
 */
export type Issue$upvotesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueUpvote
     */
    select?: Prisma.IssueUpvoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the IssueUpvote
     */
    omit?: Prisma.IssueUpvoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.IssueUpvoteInclude<ExtArgs> | null;
    where?: Prisma.IssueUpvoteWhereInput;
    orderBy?: Prisma.IssueUpvoteOrderByWithRelationInput | Prisma.IssueUpvoteOrderByWithRelationInput[];
    cursor?: Prisma.IssueUpvoteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.IssueUpvoteScalarFieldEnum | Prisma.IssueUpvoteScalarFieldEnum[];
};
/**
 * Issue without action
 */
export type IssueDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: Prisma.IssueSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Issue
     */
    omit?: Prisma.IssueOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.IssueInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Issue.d.ts.map