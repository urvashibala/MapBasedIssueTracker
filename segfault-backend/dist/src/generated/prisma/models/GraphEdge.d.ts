import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model GraphEdge
 *
 */
export type GraphEdgeModel = runtime.Types.Result.DefaultSelection<Prisma.$GraphEdgePayload>;
export type AggregateGraphEdge = {
    _count: GraphEdgeCountAggregateOutputType | null;
    _avg: GraphEdgeAvgAggregateOutputType | null;
    _sum: GraphEdgeSumAggregateOutputType | null;
    _min: GraphEdgeMinAggregateOutputType | null;
    _max: GraphEdgeMaxAggregateOutputType | null;
};
export type GraphEdgeAvgAggregateOutputType = {
    distance: number | null;
    baseCost: number | null;
    penalty: number | null;
};
export type GraphEdgeSumAggregateOutputType = {
    distance: number | null;
    baseCost: number | null;
    penalty: number | null;
};
export type GraphEdgeMinAggregateOutputType = {
    id: string | null;
    startNodeId: string | null;
    endNodeId: string | null;
    distance: number | null;
    baseCost: number | null;
    penalty: number | null;
};
export type GraphEdgeMaxAggregateOutputType = {
    id: string | null;
    startNodeId: string | null;
    endNodeId: string | null;
    distance: number | null;
    baseCost: number | null;
    penalty: number | null;
};
export type GraphEdgeCountAggregateOutputType = {
    id: number;
    startNodeId: number;
    endNodeId: number;
    distance: number;
    baseCost: number;
    penalty: number;
    _all: number;
};
export type GraphEdgeAvgAggregateInputType = {
    distance?: true;
    baseCost?: true;
    penalty?: true;
};
export type GraphEdgeSumAggregateInputType = {
    distance?: true;
    baseCost?: true;
    penalty?: true;
};
export type GraphEdgeMinAggregateInputType = {
    id?: true;
    startNodeId?: true;
    endNodeId?: true;
    distance?: true;
    baseCost?: true;
    penalty?: true;
};
export type GraphEdgeMaxAggregateInputType = {
    id?: true;
    startNodeId?: true;
    endNodeId?: true;
    distance?: true;
    baseCost?: true;
    penalty?: true;
};
export type GraphEdgeCountAggregateInputType = {
    id?: true;
    startNodeId?: true;
    endNodeId?: true;
    distance?: true;
    baseCost?: true;
    penalty?: true;
    _all?: true;
};
export type GraphEdgeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which GraphEdge to aggregate.
     */
    where?: Prisma.GraphEdgeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of GraphEdges to fetch.
     */
    orderBy?: Prisma.GraphEdgeOrderByWithRelationInput | Prisma.GraphEdgeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.GraphEdgeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` GraphEdges from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` GraphEdges.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned GraphEdges
    **/
    _count?: true | GraphEdgeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: GraphEdgeAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: GraphEdgeSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: GraphEdgeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: GraphEdgeMaxAggregateInputType;
};
export type GetGraphEdgeAggregateType<T extends GraphEdgeAggregateArgs> = {
    [P in keyof T & keyof AggregateGraphEdge]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateGraphEdge[P]> : Prisma.GetScalarType<T[P], AggregateGraphEdge[P]>;
};
export type GraphEdgeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GraphEdgeWhereInput;
    orderBy?: Prisma.GraphEdgeOrderByWithAggregationInput | Prisma.GraphEdgeOrderByWithAggregationInput[];
    by: Prisma.GraphEdgeScalarFieldEnum[] | Prisma.GraphEdgeScalarFieldEnum;
    having?: Prisma.GraphEdgeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GraphEdgeCountAggregateInputType | true;
    _avg?: GraphEdgeAvgAggregateInputType;
    _sum?: GraphEdgeSumAggregateInputType;
    _min?: GraphEdgeMinAggregateInputType;
    _max?: GraphEdgeMaxAggregateInputType;
};
export type GraphEdgeGroupByOutputType = {
    id: string;
    startNodeId: string;
    endNodeId: string;
    distance: number;
    baseCost: number;
    penalty: number;
    _count: GraphEdgeCountAggregateOutputType | null;
    _avg: GraphEdgeAvgAggregateOutputType | null;
    _sum: GraphEdgeSumAggregateOutputType | null;
    _min: GraphEdgeMinAggregateOutputType | null;
    _max: GraphEdgeMaxAggregateOutputType | null;
};
type GetGraphEdgeGroupByPayload<T extends GraphEdgeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<GraphEdgeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof GraphEdgeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], GraphEdgeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], GraphEdgeGroupByOutputType[P]>;
}>>;
export type GraphEdgeWhereInput = {
    AND?: Prisma.GraphEdgeWhereInput | Prisma.GraphEdgeWhereInput[];
    OR?: Prisma.GraphEdgeWhereInput[];
    NOT?: Prisma.GraphEdgeWhereInput | Prisma.GraphEdgeWhereInput[];
    id?: Prisma.StringFilter<"GraphEdge"> | string;
    startNodeId?: Prisma.StringFilter<"GraphEdge"> | string;
    endNodeId?: Prisma.StringFilter<"GraphEdge"> | string;
    distance?: Prisma.FloatFilter<"GraphEdge"> | number;
    baseCost?: Prisma.FloatFilter<"GraphEdge"> | number;
    penalty?: Prisma.FloatFilter<"GraphEdge"> | number;
    startNode?: Prisma.XOR<Prisma.GraphNodeScalarRelationFilter, Prisma.GraphNodeWhereInput>;
    endNode?: Prisma.XOR<Prisma.GraphNodeScalarRelationFilter, Prisma.GraphNodeWhereInput>;
};
export type GraphEdgeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    startNodeId?: Prisma.SortOrder;
    endNodeId?: Prisma.SortOrder;
    distance?: Prisma.SortOrder;
    baseCost?: Prisma.SortOrder;
    penalty?: Prisma.SortOrder;
    startNode?: Prisma.GraphNodeOrderByWithRelationInput;
    endNode?: Prisma.GraphNodeOrderByWithRelationInput;
};
export type GraphEdgeWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.GraphEdgeWhereInput | Prisma.GraphEdgeWhereInput[];
    OR?: Prisma.GraphEdgeWhereInput[];
    NOT?: Prisma.GraphEdgeWhereInput | Prisma.GraphEdgeWhereInput[];
    startNodeId?: Prisma.StringFilter<"GraphEdge"> | string;
    endNodeId?: Prisma.StringFilter<"GraphEdge"> | string;
    distance?: Prisma.FloatFilter<"GraphEdge"> | number;
    baseCost?: Prisma.FloatFilter<"GraphEdge"> | number;
    penalty?: Prisma.FloatFilter<"GraphEdge"> | number;
    startNode?: Prisma.XOR<Prisma.GraphNodeScalarRelationFilter, Prisma.GraphNodeWhereInput>;
    endNode?: Prisma.XOR<Prisma.GraphNodeScalarRelationFilter, Prisma.GraphNodeWhereInput>;
}, "id">;
export type GraphEdgeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    startNodeId?: Prisma.SortOrder;
    endNodeId?: Prisma.SortOrder;
    distance?: Prisma.SortOrder;
    baseCost?: Prisma.SortOrder;
    penalty?: Prisma.SortOrder;
    _count?: Prisma.GraphEdgeCountOrderByAggregateInput;
    _avg?: Prisma.GraphEdgeAvgOrderByAggregateInput;
    _max?: Prisma.GraphEdgeMaxOrderByAggregateInput;
    _min?: Prisma.GraphEdgeMinOrderByAggregateInput;
    _sum?: Prisma.GraphEdgeSumOrderByAggregateInput;
};
export type GraphEdgeScalarWhereWithAggregatesInput = {
    AND?: Prisma.GraphEdgeScalarWhereWithAggregatesInput | Prisma.GraphEdgeScalarWhereWithAggregatesInput[];
    OR?: Prisma.GraphEdgeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.GraphEdgeScalarWhereWithAggregatesInput | Prisma.GraphEdgeScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"GraphEdge"> | string;
    startNodeId?: Prisma.StringWithAggregatesFilter<"GraphEdge"> | string;
    endNodeId?: Prisma.StringWithAggregatesFilter<"GraphEdge"> | string;
    distance?: Prisma.FloatWithAggregatesFilter<"GraphEdge"> | number;
    baseCost?: Prisma.FloatWithAggregatesFilter<"GraphEdge"> | number;
    penalty?: Prisma.FloatWithAggregatesFilter<"GraphEdge"> | number;
};
export type GraphEdgeCreateInput = {
    id?: string;
    distance: number;
    baseCost: number;
    penalty?: number;
    startNode: Prisma.GraphNodeCreateNestedOneWithoutOutgoingInput;
    endNode: Prisma.GraphNodeCreateNestedOneWithoutIncomingInput;
};
export type GraphEdgeUncheckedCreateInput = {
    id?: string;
    startNodeId: string;
    endNodeId: string;
    distance: number;
    baseCost: number;
    penalty?: number;
};
export type GraphEdgeUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    distance?: Prisma.FloatFieldUpdateOperationsInput | number;
    baseCost?: Prisma.FloatFieldUpdateOperationsInput | number;
    penalty?: Prisma.FloatFieldUpdateOperationsInput | number;
    startNode?: Prisma.GraphNodeUpdateOneRequiredWithoutOutgoingNestedInput;
    endNode?: Prisma.GraphNodeUpdateOneRequiredWithoutIncomingNestedInput;
};
export type GraphEdgeUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startNodeId?: Prisma.StringFieldUpdateOperationsInput | string;
    endNodeId?: Prisma.StringFieldUpdateOperationsInput | string;
    distance?: Prisma.FloatFieldUpdateOperationsInput | number;
    baseCost?: Prisma.FloatFieldUpdateOperationsInput | number;
    penalty?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type GraphEdgeCreateManyInput = {
    id?: string;
    startNodeId: string;
    endNodeId: string;
    distance: number;
    baseCost: number;
    penalty?: number;
};
export type GraphEdgeUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    distance?: Prisma.FloatFieldUpdateOperationsInput | number;
    baseCost?: Prisma.FloatFieldUpdateOperationsInput | number;
    penalty?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type GraphEdgeUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startNodeId?: Prisma.StringFieldUpdateOperationsInput | string;
    endNodeId?: Prisma.StringFieldUpdateOperationsInput | string;
    distance?: Prisma.FloatFieldUpdateOperationsInput | number;
    baseCost?: Prisma.FloatFieldUpdateOperationsInput | number;
    penalty?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type GraphEdgeListRelationFilter = {
    every?: Prisma.GraphEdgeWhereInput;
    some?: Prisma.GraphEdgeWhereInput;
    none?: Prisma.GraphEdgeWhereInput;
};
export type GraphEdgeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type GraphEdgeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    startNodeId?: Prisma.SortOrder;
    endNodeId?: Prisma.SortOrder;
    distance?: Prisma.SortOrder;
    baseCost?: Prisma.SortOrder;
    penalty?: Prisma.SortOrder;
};
export type GraphEdgeAvgOrderByAggregateInput = {
    distance?: Prisma.SortOrder;
    baseCost?: Prisma.SortOrder;
    penalty?: Prisma.SortOrder;
};
export type GraphEdgeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    startNodeId?: Prisma.SortOrder;
    endNodeId?: Prisma.SortOrder;
    distance?: Prisma.SortOrder;
    baseCost?: Prisma.SortOrder;
    penalty?: Prisma.SortOrder;
};
export type GraphEdgeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    startNodeId?: Prisma.SortOrder;
    endNodeId?: Prisma.SortOrder;
    distance?: Prisma.SortOrder;
    baseCost?: Prisma.SortOrder;
    penalty?: Prisma.SortOrder;
};
export type GraphEdgeSumOrderByAggregateInput = {
    distance?: Prisma.SortOrder;
    baseCost?: Prisma.SortOrder;
    penalty?: Prisma.SortOrder;
};
export type GraphEdgeCreateNestedManyWithoutStartNodeInput = {
    create?: Prisma.XOR<Prisma.GraphEdgeCreateWithoutStartNodeInput, Prisma.GraphEdgeUncheckedCreateWithoutStartNodeInput> | Prisma.GraphEdgeCreateWithoutStartNodeInput[] | Prisma.GraphEdgeUncheckedCreateWithoutStartNodeInput[];
    connectOrCreate?: Prisma.GraphEdgeCreateOrConnectWithoutStartNodeInput | Prisma.GraphEdgeCreateOrConnectWithoutStartNodeInput[];
    createMany?: Prisma.GraphEdgeCreateManyStartNodeInputEnvelope;
    connect?: Prisma.GraphEdgeWhereUniqueInput | Prisma.GraphEdgeWhereUniqueInput[];
};
export type GraphEdgeCreateNestedManyWithoutEndNodeInput = {
    create?: Prisma.XOR<Prisma.GraphEdgeCreateWithoutEndNodeInput, Prisma.GraphEdgeUncheckedCreateWithoutEndNodeInput> | Prisma.GraphEdgeCreateWithoutEndNodeInput[] | Prisma.GraphEdgeUncheckedCreateWithoutEndNodeInput[];
    connectOrCreate?: Prisma.GraphEdgeCreateOrConnectWithoutEndNodeInput | Prisma.GraphEdgeCreateOrConnectWithoutEndNodeInput[];
    createMany?: Prisma.GraphEdgeCreateManyEndNodeInputEnvelope;
    connect?: Prisma.GraphEdgeWhereUniqueInput | Prisma.GraphEdgeWhereUniqueInput[];
};
export type GraphEdgeUncheckedCreateNestedManyWithoutStartNodeInput = {
    create?: Prisma.XOR<Prisma.GraphEdgeCreateWithoutStartNodeInput, Prisma.GraphEdgeUncheckedCreateWithoutStartNodeInput> | Prisma.GraphEdgeCreateWithoutStartNodeInput[] | Prisma.GraphEdgeUncheckedCreateWithoutStartNodeInput[];
    connectOrCreate?: Prisma.GraphEdgeCreateOrConnectWithoutStartNodeInput | Prisma.GraphEdgeCreateOrConnectWithoutStartNodeInput[];
    createMany?: Prisma.GraphEdgeCreateManyStartNodeInputEnvelope;
    connect?: Prisma.GraphEdgeWhereUniqueInput | Prisma.GraphEdgeWhereUniqueInput[];
};
export type GraphEdgeUncheckedCreateNestedManyWithoutEndNodeInput = {
    create?: Prisma.XOR<Prisma.GraphEdgeCreateWithoutEndNodeInput, Prisma.GraphEdgeUncheckedCreateWithoutEndNodeInput> | Prisma.GraphEdgeCreateWithoutEndNodeInput[] | Prisma.GraphEdgeUncheckedCreateWithoutEndNodeInput[];
    connectOrCreate?: Prisma.GraphEdgeCreateOrConnectWithoutEndNodeInput | Prisma.GraphEdgeCreateOrConnectWithoutEndNodeInput[];
    createMany?: Prisma.GraphEdgeCreateManyEndNodeInputEnvelope;
    connect?: Prisma.GraphEdgeWhereUniqueInput | Prisma.GraphEdgeWhereUniqueInput[];
};
export type GraphEdgeUpdateManyWithoutStartNodeNestedInput = {
    create?: Prisma.XOR<Prisma.GraphEdgeCreateWithoutStartNodeInput, Prisma.GraphEdgeUncheckedCreateWithoutStartNodeInput> | Prisma.GraphEdgeCreateWithoutStartNodeInput[] | Prisma.GraphEdgeUncheckedCreateWithoutStartNodeInput[];
    connectOrCreate?: Prisma.GraphEdgeCreateOrConnectWithoutStartNodeInput | Prisma.GraphEdgeCreateOrConnectWithoutStartNodeInput[];
    upsert?: Prisma.GraphEdgeUpsertWithWhereUniqueWithoutStartNodeInput | Prisma.GraphEdgeUpsertWithWhereUniqueWithoutStartNodeInput[];
    createMany?: Prisma.GraphEdgeCreateManyStartNodeInputEnvelope;
    set?: Prisma.GraphEdgeWhereUniqueInput | Prisma.GraphEdgeWhereUniqueInput[];
    disconnect?: Prisma.GraphEdgeWhereUniqueInput | Prisma.GraphEdgeWhereUniqueInput[];
    delete?: Prisma.GraphEdgeWhereUniqueInput | Prisma.GraphEdgeWhereUniqueInput[];
    connect?: Prisma.GraphEdgeWhereUniqueInput | Prisma.GraphEdgeWhereUniqueInput[];
    update?: Prisma.GraphEdgeUpdateWithWhereUniqueWithoutStartNodeInput | Prisma.GraphEdgeUpdateWithWhereUniqueWithoutStartNodeInput[];
    updateMany?: Prisma.GraphEdgeUpdateManyWithWhereWithoutStartNodeInput | Prisma.GraphEdgeUpdateManyWithWhereWithoutStartNodeInput[];
    deleteMany?: Prisma.GraphEdgeScalarWhereInput | Prisma.GraphEdgeScalarWhereInput[];
};
export type GraphEdgeUpdateManyWithoutEndNodeNestedInput = {
    create?: Prisma.XOR<Prisma.GraphEdgeCreateWithoutEndNodeInput, Prisma.GraphEdgeUncheckedCreateWithoutEndNodeInput> | Prisma.GraphEdgeCreateWithoutEndNodeInput[] | Prisma.GraphEdgeUncheckedCreateWithoutEndNodeInput[];
    connectOrCreate?: Prisma.GraphEdgeCreateOrConnectWithoutEndNodeInput | Prisma.GraphEdgeCreateOrConnectWithoutEndNodeInput[];
    upsert?: Prisma.GraphEdgeUpsertWithWhereUniqueWithoutEndNodeInput | Prisma.GraphEdgeUpsertWithWhereUniqueWithoutEndNodeInput[];
    createMany?: Prisma.GraphEdgeCreateManyEndNodeInputEnvelope;
    set?: Prisma.GraphEdgeWhereUniqueInput | Prisma.GraphEdgeWhereUniqueInput[];
    disconnect?: Prisma.GraphEdgeWhereUniqueInput | Prisma.GraphEdgeWhereUniqueInput[];
    delete?: Prisma.GraphEdgeWhereUniqueInput | Prisma.GraphEdgeWhereUniqueInput[];
    connect?: Prisma.GraphEdgeWhereUniqueInput | Prisma.GraphEdgeWhereUniqueInput[];
    update?: Prisma.GraphEdgeUpdateWithWhereUniqueWithoutEndNodeInput | Prisma.GraphEdgeUpdateWithWhereUniqueWithoutEndNodeInput[];
    updateMany?: Prisma.GraphEdgeUpdateManyWithWhereWithoutEndNodeInput | Prisma.GraphEdgeUpdateManyWithWhereWithoutEndNodeInput[];
    deleteMany?: Prisma.GraphEdgeScalarWhereInput | Prisma.GraphEdgeScalarWhereInput[];
};
export type GraphEdgeUncheckedUpdateManyWithoutStartNodeNestedInput = {
    create?: Prisma.XOR<Prisma.GraphEdgeCreateWithoutStartNodeInput, Prisma.GraphEdgeUncheckedCreateWithoutStartNodeInput> | Prisma.GraphEdgeCreateWithoutStartNodeInput[] | Prisma.GraphEdgeUncheckedCreateWithoutStartNodeInput[];
    connectOrCreate?: Prisma.GraphEdgeCreateOrConnectWithoutStartNodeInput | Prisma.GraphEdgeCreateOrConnectWithoutStartNodeInput[];
    upsert?: Prisma.GraphEdgeUpsertWithWhereUniqueWithoutStartNodeInput | Prisma.GraphEdgeUpsertWithWhereUniqueWithoutStartNodeInput[];
    createMany?: Prisma.GraphEdgeCreateManyStartNodeInputEnvelope;
    set?: Prisma.GraphEdgeWhereUniqueInput | Prisma.GraphEdgeWhereUniqueInput[];
    disconnect?: Prisma.GraphEdgeWhereUniqueInput | Prisma.GraphEdgeWhereUniqueInput[];
    delete?: Prisma.GraphEdgeWhereUniqueInput | Prisma.GraphEdgeWhereUniqueInput[];
    connect?: Prisma.GraphEdgeWhereUniqueInput | Prisma.GraphEdgeWhereUniqueInput[];
    update?: Prisma.GraphEdgeUpdateWithWhereUniqueWithoutStartNodeInput | Prisma.GraphEdgeUpdateWithWhereUniqueWithoutStartNodeInput[];
    updateMany?: Prisma.GraphEdgeUpdateManyWithWhereWithoutStartNodeInput | Prisma.GraphEdgeUpdateManyWithWhereWithoutStartNodeInput[];
    deleteMany?: Prisma.GraphEdgeScalarWhereInput | Prisma.GraphEdgeScalarWhereInput[];
};
export type GraphEdgeUncheckedUpdateManyWithoutEndNodeNestedInput = {
    create?: Prisma.XOR<Prisma.GraphEdgeCreateWithoutEndNodeInput, Prisma.GraphEdgeUncheckedCreateWithoutEndNodeInput> | Prisma.GraphEdgeCreateWithoutEndNodeInput[] | Prisma.GraphEdgeUncheckedCreateWithoutEndNodeInput[];
    connectOrCreate?: Prisma.GraphEdgeCreateOrConnectWithoutEndNodeInput | Prisma.GraphEdgeCreateOrConnectWithoutEndNodeInput[];
    upsert?: Prisma.GraphEdgeUpsertWithWhereUniqueWithoutEndNodeInput | Prisma.GraphEdgeUpsertWithWhereUniqueWithoutEndNodeInput[];
    createMany?: Prisma.GraphEdgeCreateManyEndNodeInputEnvelope;
    set?: Prisma.GraphEdgeWhereUniqueInput | Prisma.GraphEdgeWhereUniqueInput[];
    disconnect?: Prisma.GraphEdgeWhereUniqueInput | Prisma.GraphEdgeWhereUniqueInput[];
    delete?: Prisma.GraphEdgeWhereUniqueInput | Prisma.GraphEdgeWhereUniqueInput[];
    connect?: Prisma.GraphEdgeWhereUniqueInput | Prisma.GraphEdgeWhereUniqueInput[];
    update?: Prisma.GraphEdgeUpdateWithWhereUniqueWithoutEndNodeInput | Prisma.GraphEdgeUpdateWithWhereUniqueWithoutEndNodeInput[];
    updateMany?: Prisma.GraphEdgeUpdateManyWithWhereWithoutEndNodeInput | Prisma.GraphEdgeUpdateManyWithWhereWithoutEndNodeInput[];
    deleteMany?: Prisma.GraphEdgeScalarWhereInput | Prisma.GraphEdgeScalarWhereInput[];
};
export type GraphEdgeCreateWithoutStartNodeInput = {
    id?: string;
    distance: number;
    baseCost: number;
    penalty?: number;
    endNode: Prisma.GraphNodeCreateNestedOneWithoutIncomingInput;
};
export type GraphEdgeUncheckedCreateWithoutStartNodeInput = {
    id?: string;
    endNodeId: string;
    distance: number;
    baseCost: number;
    penalty?: number;
};
export type GraphEdgeCreateOrConnectWithoutStartNodeInput = {
    where: Prisma.GraphEdgeWhereUniqueInput;
    create: Prisma.XOR<Prisma.GraphEdgeCreateWithoutStartNodeInput, Prisma.GraphEdgeUncheckedCreateWithoutStartNodeInput>;
};
export type GraphEdgeCreateManyStartNodeInputEnvelope = {
    data: Prisma.GraphEdgeCreateManyStartNodeInput | Prisma.GraphEdgeCreateManyStartNodeInput[];
    skipDuplicates?: boolean;
};
export type GraphEdgeCreateWithoutEndNodeInput = {
    id?: string;
    distance: number;
    baseCost: number;
    penalty?: number;
    startNode: Prisma.GraphNodeCreateNestedOneWithoutOutgoingInput;
};
export type GraphEdgeUncheckedCreateWithoutEndNodeInput = {
    id?: string;
    startNodeId: string;
    distance: number;
    baseCost: number;
    penalty?: number;
};
export type GraphEdgeCreateOrConnectWithoutEndNodeInput = {
    where: Prisma.GraphEdgeWhereUniqueInput;
    create: Prisma.XOR<Prisma.GraphEdgeCreateWithoutEndNodeInput, Prisma.GraphEdgeUncheckedCreateWithoutEndNodeInput>;
};
export type GraphEdgeCreateManyEndNodeInputEnvelope = {
    data: Prisma.GraphEdgeCreateManyEndNodeInput | Prisma.GraphEdgeCreateManyEndNodeInput[];
    skipDuplicates?: boolean;
};
export type GraphEdgeUpsertWithWhereUniqueWithoutStartNodeInput = {
    where: Prisma.GraphEdgeWhereUniqueInput;
    update: Prisma.XOR<Prisma.GraphEdgeUpdateWithoutStartNodeInput, Prisma.GraphEdgeUncheckedUpdateWithoutStartNodeInput>;
    create: Prisma.XOR<Prisma.GraphEdgeCreateWithoutStartNodeInput, Prisma.GraphEdgeUncheckedCreateWithoutStartNodeInput>;
};
export type GraphEdgeUpdateWithWhereUniqueWithoutStartNodeInput = {
    where: Prisma.GraphEdgeWhereUniqueInput;
    data: Prisma.XOR<Prisma.GraphEdgeUpdateWithoutStartNodeInput, Prisma.GraphEdgeUncheckedUpdateWithoutStartNodeInput>;
};
export type GraphEdgeUpdateManyWithWhereWithoutStartNodeInput = {
    where: Prisma.GraphEdgeScalarWhereInput;
    data: Prisma.XOR<Prisma.GraphEdgeUpdateManyMutationInput, Prisma.GraphEdgeUncheckedUpdateManyWithoutStartNodeInput>;
};
export type GraphEdgeScalarWhereInput = {
    AND?: Prisma.GraphEdgeScalarWhereInput | Prisma.GraphEdgeScalarWhereInput[];
    OR?: Prisma.GraphEdgeScalarWhereInput[];
    NOT?: Prisma.GraphEdgeScalarWhereInput | Prisma.GraphEdgeScalarWhereInput[];
    id?: Prisma.StringFilter<"GraphEdge"> | string;
    startNodeId?: Prisma.StringFilter<"GraphEdge"> | string;
    endNodeId?: Prisma.StringFilter<"GraphEdge"> | string;
    distance?: Prisma.FloatFilter<"GraphEdge"> | number;
    baseCost?: Prisma.FloatFilter<"GraphEdge"> | number;
    penalty?: Prisma.FloatFilter<"GraphEdge"> | number;
};
export type GraphEdgeUpsertWithWhereUniqueWithoutEndNodeInput = {
    where: Prisma.GraphEdgeWhereUniqueInput;
    update: Prisma.XOR<Prisma.GraphEdgeUpdateWithoutEndNodeInput, Prisma.GraphEdgeUncheckedUpdateWithoutEndNodeInput>;
    create: Prisma.XOR<Prisma.GraphEdgeCreateWithoutEndNodeInput, Prisma.GraphEdgeUncheckedCreateWithoutEndNodeInput>;
};
export type GraphEdgeUpdateWithWhereUniqueWithoutEndNodeInput = {
    where: Prisma.GraphEdgeWhereUniqueInput;
    data: Prisma.XOR<Prisma.GraphEdgeUpdateWithoutEndNodeInput, Prisma.GraphEdgeUncheckedUpdateWithoutEndNodeInput>;
};
export type GraphEdgeUpdateManyWithWhereWithoutEndNodeInput = {
    where: Prisma.GraphEdgeScalarWhereInput;
    data: Prisma.XOR<Prisma.GraphEdgeUpdateManyMutationInput, Prisma.GraphEdgeUncheckedUpdateManyWithoutEndNodeInput>;
};
export type GraphEdgeCreateManyStartNodeInput = {
    id?: string;
    endNodeId: string;
    distance: number;
    baseCost: number;
    penalty?: number;
};
export type GraphEdgeCreateManyEndNodeInput = {
    id?: string;
    startNodeId: string;
    distance: number;
    baseCost: number;
    penalty?: number;
};
export type GraphEdgeUpdateWithoutStartNodeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    distance?: Prisma.FloatFieldUpdateOperationsInput | number;
    baseCost?: Prisma.FloatFieldUpdateOperationsInput | number;
    penalty?: Prisma.FloatFieldUpdateOperationsInput | number;
    endNode?: Prisma.GraphNodeUpdateOneRequiredWithoutIncomingNestedInput;
};
export type GraphEdgeUncheckedUpdateWithoutStartNodeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    endNodeId?: Prisma.StringFieldUpdateOperationsInput | string;
    distance?: Prisma.FloatFieldUpdateOperationsInput | number;
    baseCost?: Prisma.FloatFieldUpdateOperationsInput | number;
    penalty?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type GraphEdgeUncheckedUpdateManyWithoutStartNodeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    endNodeId?: Prisma.StringFieldUpdateOperationsInput | string;
    distance?: Prisma.FloatFieldUpdateOperationsInput | number;
    baseCost?: Prisma.FloatFieldUpdateOperationsInput | number;
    penalty?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type GraphEdgeUpdateWithoutEndNodeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    distance?: Prisma.FloatFieldUpdateOperationsInput | number;
    baseCost?: Prisma.FloatFieldUpdateOperationsInput | number;
    penalty?: Prisma.FloatFieldUpdateOperationsInput | number;
    startNode?: Prisma.GraphNodeUpdateOneRequiredWithoutOutgoingNestedInput;
};
export type GraphEdgeUncheckedUpdateWithoutEndNodeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startNodeId?: Prisma.StringFieldUpdateOperationsInput | string;
    distance?: Prisma.FloatFieldUpdateOperationsInput | number;
    baseCost?: Prisma.FloatFieldUpdateOperationsInput | number;
    penalty?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type GraphEdgeUncheckedUpdateManyWithoutEndNodeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startNodeId?: Prisma.StringFieldUpdateOperationsInput | string;
    distance?: Prisma.FloatFieldUpdateOperationsInput | number;
    baseCost?: Prisma.FloatFieldUpdateOperationsInput | number;
    penalty?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type GraphEdgeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    startNodeId?: boolean;
    endNodeId?: boolean;
    distance?: boolean;
    baseCost?: boolean;
    penalty?: boolean;
    startNode?: boolean | Prisma.GraphNodeDefaultArgs<ExtArgs>;
    endNode?: boolean | Prisma.GraphNodeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["graphEdge"]>;
export type GraphEdgeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    startNodeId?: boolean;
    endNodeId?: boolean;
    distance?: boolean;
    baseCost?: boolean;
    penalty?: boolean;
    startNode?: boolean | Prisma.GraphNodeDefaultArgs<ExtArgs>;
    endNode?: boolean | Prisma.GraphNodeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["graphEdge"]>;
export type GraphEdgeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    startNodeId?: boolean;
    endNodeId?: boolean;
    distance?: boolean;
    baseCost?: boolean;
    penalty?: boolean;
    startNode?: boolean | Prisma.GraphNodeDefaultArgs<ExtArgs>;
    endNode?: boolean | Prisma.GraphNodeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["graphEdge"]>;
export type GraphEdgeSelectScalar = {
    id?: boolean;
    startNodeId?: boolean;
    endNodeId?: boolean;
    distance?: boolean;
    baseCost?: boolean;
    penalty?: boolean;
};
export type GraphEdgeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "startNodeId" | "endNodeId" | "distance" | "baseCost" | "penalty", ExtArgs["result"]["graphEdge"]>;
export type GraphEdgeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    startNode?: boolean | Prisma.GraphNodeDefaultArgs<ExtArgs>;
    endNode?: boolean | Prisma.GraphNodeDefaultArgs<ExtArgs>;
};
export type GraphEdgeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    startNode?: boolean | Prisma.GraphNodeDefaultArgs<ExtArgs>;
    endNode?: boolean | Prisma.GraphNodeDefaultArgs<ExtArgs>;
};
export type GraphEdgeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    startNode?: boolean | Prisma.GraphNodeDefaultArgs<ExtArgs>;
    endNode?: boolean | Prisma.GraphNodeDefaultArgs<ExtArgs>;
};
export type $GraphEdgePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "GraphEdge";
    objects: {
        startNode: Prisma.$GraphNodePayload<ExtArgs>;
        endNode: Prisma.$GraphNodePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        startNodeId: string;
        endNodeId: string;
        distance: number;
        baseCost: number;
        penalty: number;
    }, ExtArgs["result"]["graphEdge"]>;
    composites: {};
};
export type GraphEdgeGetPayload<S extends boolean | null | undefined | GraphEdgeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$GraphEdgePayload, S>;
export type GraphEdgeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<GraphEdgeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: GraphEdgeCountAggregateInputType | true;
};
export interface GraphEdgeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['GraphEdge'];
        meta: {
            name: 'GraphEdge';
        };
    };
    /**
     * Find zero or one GraphEdge that matches the filter.
     * @param {GraphEdgeFindUniqueArgs} args - Arguments to find a GraphEdge
     * @example
     * // Get one GraphEdge
     * const graphEdge = await prisma.graphEdge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GraphEdgeFindUniqueArgs>(args: Prisma.SelectSubset<T, GraphEdgeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__GraphEdgeClient<runtime.Types.Result.GetResult<Prisma.$GraphEdgePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one GraphEdge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GraphEdgeFindUniqueOrThrowArgs} args - Arguments to find a GraphEdge
     * @example
     * // Get one GraphEdge
     * const graphEdge = await prisma.graphEdge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GraphEdgeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, GraphEdgeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__GraphEdgeClient<runtime.Types.Result.GetResult<Prisma.$GraphEdgePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first GraphEdge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GraphEdgeFindFirstArgs} args - Arguments to find a GraphEdge
     * @example
     * // Get one GraphEdge
     * const graphEdge = await prisma.graphEdge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GraphEdgeFindFirstArgs>(args?: Prisma.SelectSubset<T, GraphEdgeFindFirstArgs<ExtArgs>>): Prisma.Prisma__GraphEdgeClient<runtime.Types.Result.GetResult<Prisma.$GraphEdgePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first GraphEdge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GraphEdgeFindFirstOrThrowArgs} args - Arguments to find a GraphEdge
     * @example
     * // Get one GraphEdge
     * const graphEdge = await prisma.graphEdge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GraphEdgeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, GraphEdgeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__GraphEdgeClient<runtime.Types.Result.GetResult<Prisma.$GraphEdgePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more GraphEdges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GraphEdgeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GraphEdges
     * const graphEdges = await prisma.graphEdge.findMany()
     *
     * // Get first 10 GraphEdges
     * const graphEdges = await prisma.graphEdge.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const graphEdgeWithIdOnly = await prisma.graphEdge.findMany({ select: { id: true } })
     *
     */
    findMany<T extends GraphEdgeFindManyArgs>(args?: Prisma.SelectSubset<T, GraphEdgeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GraphEdgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a GraphEdge.
     * @param {GraphEdgeCreateArgs} args - Arguments to create a GraphEdge.
     * @example
     * // Create one GraphEdge
     * const GraphEdge = await prisma.graphEdge.create({
     *   data: {
     *     // ... data to create a GraphEdge
     *   }
     * })
     *
     */
    create<T extends GraphEdgeCreateArgs>(args: Prisma.SelectSubset<T, GraphEdgeCreateArgs<ExtArgs>>): Prisma.Prisma__GraphEdgeClient<runtime.Types.Result.GetResult<Prisma.$GraphEdgePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many GraphEdges.
     * @param {GraphEdgeCreateManyArgs} args - Arguments to create many GraphEdges.
     * @example
     * // Create many GraphEdges
     * const graphEdge = await prisma.graphEdge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends GraphEdgeCreateManyArgs>(args?: Prisma.SelectSubset<T, GraphEdgeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many GraphEdges and returns the data saved in the database.
     * @param {GraphEdgeCreateManyAndReturnArgs} args - Arguments to create many GraphEdges.
     * @example
     * // Create many GraphEdges
     * const graphEdge = await prisma.graphEdge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many GraphEdges and only return the `id`
     * const graphEdgeWithIdOnly = await prisma.graphEdge.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends GraphEdgeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, GraphEdgeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GraphEdgePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a GraphEdge.
     * @param {GraphEdgeDeleteArgs} args - Arguments to delete one GraphEdge.
     * @example
     * // Delete one GraphEdge
     * const GraphEdge = await prisma.graphEdge.delete({
     *   where: {
     *     // ... filter to delete one GraphEdge
     *   }
     * })
     *
     */
    delete<T extends GraphEdgeDeleteArgs>(args: Prisma.SelectSubset<T, GraphEdgeDeleteArgs<ExtArgs>>): Prisma.Prisma__GraphEdgeClient<runtime.Types.Result.GetResult<Prisma.$GraphEdgePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one GraphEdge.
     * @param {GraphEdgeUpdateArgs} args - Arguments to update one GraphEdge.
     * @example
     * // Update one GraphEdge
     * const graphEdge = await prisma.graphEdge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends GraphEdgeUpdateArgs>(args: Prisma.SelectSubset<T, GraphEdgeUpdateArgs<ExtArgs>>): Prisma.Prisma__GraphEdgeClient<runtime.Types.Result.GetResult<Prisma.$GraphEdgePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more GraphEdges.
     * @param {GraphEdgeDeleteManyArgs} args - Arguments to filter GraphEdges to delete.
     * @example
     * // Delete a few GraphEdges
     * const { count } = await prisma.graphEdge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends GraphEdgeDeleteManyArgs>(args?: Prisma.SelectSubset<T, GraphEdgeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more GraphEdges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GraphEdgeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GraphEdges
     * const graphEdge = await prisma.graphEdge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends GraphEdgeUpdateManyArgs>(args: Prisma.SelectSubset<T, GraphEdgeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more GraphEdges and returns the data updated in the database.
     * @param {GraphEdgeUpdateManyAndReturnArgs} args - Arguments to update many GraphEdges.
     * @example
     * // Update many GraphEdges
     * const graphEdge = await prisma.graphEdge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more GraphEdges and only return the `id`
     * const graphEdgeWithIdOnly = await prisma.graphEdge.updateManyAndReturn({
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
    updateManyAndReturn<T extends GraphEdgeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, GraphEdgeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GraphEdgePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one GraphEdge.
     * @param {GraphEdgeUpsertArgs} args - Arguments to update or create a GraphEdge.
     * @example
     * // Update or create a GraphEdge
     * const graphEdge = await prisma.graphEdge.upsert({
     *   create: {
     *     // ... data to create a GraphEdge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GraphEdge we want to update
     *   }
     * })
     */
    upsert<T extends GraphEdgeUpsertArgs>(args: Prisma.SelectSubset<T, GraphEdgeUpsertArgs<ExtArgs>>): Prisma.Prisma__GraphEdgeClient<runtime.Types.Result.GetResult<Prisma.$GraphEdgePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of GraphEdges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GraphEdgeCountArgs} args - Arguments to filter GraphEdges to count.
     * @example
     * // Count the number of GraphEdges
     * const count = await prisma.graphEdge.count({
     *   where: {
     *     // ... the filter for the GraphEdges we want to count
     *   }
     * })
    **/
    count<T extends GraphEdgeCountArgs>(args?: Prisma.Subset<T, GraphEdgeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], GraphEdgeCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a GraphEdge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GraphEdgeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GraphEdgeAggregateArgs>(args: Prisma.Subset<T, GraphEdgeAggregateArgs>): Prisma.PrismaPromise<GetGraphEdgeAggregateType<T>>;
    /**
     * Group by GraphEdge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GraphEdgeGroupByArgs} args - Group by arguments.
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
    groupBy<T extends GraphEdgeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: GraphEdgeGroupByArgs['orderBy'];
    } : {
        orderBy?: GraphEdgeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, GraphEdgeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGraphEdgeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the GraphEdge model
     */
    readonly fields: GraphEdgeFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for GraphEdge.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__GraphEdgeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    startNode<T extends Prisma.GraphNodeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.GraphNodeDefaultArgs<ExtArgs>>): Prisma.Prisma__GraphNodeClient<runtime.Types.Result.GetResult<Prisma.$GraphNodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    endNode<T extends Prisma.GraphNodeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.GraphNodeDefaultArgs<ExtArgs>>): Prisma.Prisma__GraphNodeClient<runtime.Types.Result.GetResult<Prisma.$GraphNodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the GraphEdge model
 */
export interface GraphEdgeFieldRefs {
    readonly id: Prisma.FieldRef<"GraphEdge", 'String'>;
    readonly startNodeId: Prisma.FieldRef<"GraphEdge", 'String'>;
    readonly endNodeId: Prisma.FieldRef<"GraphEdge", 'String'>;
    readonly distance: Prisma.FieldRef<"GraphEdge", 'Float'>;
    readonly baseCost: Prisma.FieldRef<"GraphEdge", 'Float'>;
    readonly penalty: Prisma.FieldRef<"GraphEdge", 'Float'>;
}
/**
 * GraphEdge findUnique
 */
export type GraphEdgeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GraphEdge
     */
    select?: Prisma.GraphEdgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GraphEdge
     */
    omit?: Prisma.GraphEdgeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GraphEdgeInclude<ExtArgs> | null;
    /**
     * Filter, which GraphEdge to fetch.
     */
    where: Prisma.GraphEdgeWhereUniqueInput;
};
/**
 * GraphEdge findUniqueOrThrow
 */
export type GraphEdgeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GraphEdge
     */
    select?: Prisma.GraphEdgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GraphEdge
     */
    omit?: Prisma.GraphEdgeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GraphEdgeInclude<ExtArgs> | null;
    /**
     * Filter, which GraphEdge to fetch.
     */
    where: Prisma.GraphEdgeWhereUniqueInput;
};
/**
 * GraphEdge findFirst
 */
export type GraphEdgeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GraphEdge
     */
    select?: Prisma.GraphEdgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GraphEdge
     */
    omit?: Prisma.GraphEdgeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GraphEdgeInclude<ExtArgs> | null;
    /**
     * Filter, which GraphEdge to fetch.
     */
    where?: Prisma.GraphEdgeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of GraphEdges to fetch.
     */
    orderBy?: Prisma.GraphEdgeOrderByWithRelationInput | Prisma.GraphEdgeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for GraphEdges.
     */
    cursor?: Prisma.GraphEdgeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` GraphEdges from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` GraphEdges.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of GraphEdges.
     */
    distinct?: Prisma.GraphEdgeScalarFieldEnum | Prisma.GraphEdgeScalarFieldEnum[];
};
/**
 * GraphEdge findFirstOrThrow
 */
export type GraphEdgeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GraphEdge
     */
    select?: Prisma.GraphEdgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GraphEdge
     */
    omit?: Prisma.GraphEdgeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GraphEdgeInclude<ExtArgs> | null;
    /**
     * Filter, which GraphEdge to fetch.
     */
    where?: Prisma.GraphEdgeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of GraphEdges to fetch.
     */
    orderBy?: Prisma.GraphEdgeOrderByWithRelationInput | Prisma.GraphEdgeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for GraphEdges.
     */
    cursor?: Prisma.GraphEdgeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` GraphEdges from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` GraphEdges.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of GraphEdges.
     */
    distinct?: Prisma.GraphEdgeScalarFieldEnum | Prisma.GraphEdgeScalarFieldEnum[];
};
/**
 * GraphEdge findMany
 */
export type GraphEdgeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GraphEdge
     */
    select?: Prisma.GraphEdgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GraphEdge
     */
    omit?: Prisma.GraphEdgeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GraphEdgeInclude<ExtArgs> | null;
    /**
     * Filter, which GraphEdges to fetch.
     */
    where?: Prisma.GraphEdgeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of GraphEdges to fetch.
     */
    orderBy?: Prisma.GraphEdgeOrderByWithRelationInput | Prisma.GraphEdgeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing GraphEdges.
     */
    cursor?: Prisma.GraphEdgeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` GraphEdges from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` GraphEdges.
     */
    skip?: number;
    distinct?: Prisma.GraphEdgeScalarFieldEnum | Prisma.GraphEdgeScalarFieldEnum[];
};
/**
 * GraphEdge create
 */
export type GraphEdgeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GraphEdge
     */
    select?: Prisma.GraphEdgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GraphEdge
     */
    omit?: Prisma.GraphEdgeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GraphEdgeInclude<ExtArgs> | null;
    /**
     * The data needed to create a GraphEdge.
     */
    data: Prisma.XOR<Prisma.GraphEdgeCreateInput, Prisma.GraphEdgeUncheckedCreateInput>;
};
/**
 * GraphEdge createMany
 */
export type GraphEdgeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many GraphEdges.
     */
    data: Prisma.GraphEdgeCreateManyInput | Prisma.GraphEdgeCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * GraphEdge createManyAndReturn
 */
export type GraphEdgeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GraphEdge
     */
    select?: Prisma.GraphEdgeSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the GraphEdge
     */
    omit?: Prisma.GraphEdgeOmit<ExtArgs> | null;
    /**
     * The data used to create many GraphEdges.
     */
    data: Prisma.GraphEdgeCreateManyInput | Prisma.GraphEdgeCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GraphEdgeIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * GraphEdge update
 */
export type GraphEdgeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GraphEdge
     */
    select?: Prisma.GraphEdgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GraphEdge
     */
    omit?: Prisma.GraphEdgeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GraphEdgeInclude<ExtArgs> | null;
    /**
     * The data needed to update a GraphEdge.
     */
    data: Prisma.XOR<Prisma.GraphEdgeUpdateInput, Prisma.GraphEdgeUncheckedUpdateInput>;
    /**
     * Choose, which GraphEdge to update.
     */
    where: Prisma.GraphEdgeWhereUniqueInput;
};
/**
 * GraphEdge updateMany
 */
export type GraphEdgeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update GraphEdges.
     */
    data: Prisma.XOR<Prisma.GraphEdgeUpdateManyMutationInput, Prisma.GraphEdgeUncheckedUpdateManyInput>;
    /**
     * Filter which GraphEdges to update
     */
    where?: Prisma.GraphEdgeWhereInput;
    /**
     * Limit how many GraphEdges to update.
     */
    limit?: number;
};
/**
 * GraphEdge updateManyAndReturn
 */
export type GraphEdgeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GraphEdge
     */
    select?: Prisma.GraphEdgeSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the GraphEdge
     */
    omit?: Prisma.GraphEdgeOmit<ExtArgs> | null;
    /**
     * The data used to update GraphEdges.
     */
    data: Prisma.XOR<Prisma.GraphEdgeUpdateManyMutationInput, Prisma.GraphEdgeUncheckedUpdateManyInput>;
    /**
     * Filter which GraphEdges to update
     */
    where?: Prisma.GraphEdgeWhereInput;
    /**
     * Limit how many GraphEdges to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GraphEdgeIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * GraphEdge upsert
 */
export type GraphEdgeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GraphEdge
     */
    select?: Prisma.GraphEdgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GraphEdge
     */
    omit?: Prisma.GraphEdgeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GraphEdgeInclude<ExtArgs> | null;
    /**
     * The filter to search for the GraphEdge to update in case it exists.
     */
    where: Prisma.GraphEdgeWhereUniqueInput;
    /**
     * In case the GraphEdge found by the `where` argument doesn't exist, create a new GraphEdge with this data.
     */
    create: Prisma.XOR<Prisma.GraphEdgeCreateInput, Prisma.GraphEdgeUncheckedCreateInput>;
    /**
     * In case the GraphEdge was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.GraphEdgeUpdateInput, Prisma.GraphEdgeUncheckedUpdateInput>;
};
/**
 * GraphEdge delete
 */
export type GraphEdgeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GraphEdge
     */
    select?: Prisma.GraphEdgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GraphEdge
     */
    omit?: Prisma.GraphEdgeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GraphEdgeInclude<ExtArgs> | null;
    /**
     * Filter which GraphEdge to delete.
     */
    where: Prisma.GraphEdgeWhereUniqueInput;
};
/**
 * GraphEdge deleteMany
 */
export type GraphEdgeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which GraphEdges to delete
     */
    where?: Prisma.GraphEdgeWhereInput;
    /**
     * Limit how many GraphEdges to delete.
     */
    limit?: number;
};
/**
 * GraphEdge without action
 */
export type GraphEdgeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GraphEdge
     */
    select?: Prisma.GraphEdgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GraphEdge
     */
    omit?: Prisma.GraphEdgeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GraphEdgeInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=GraphEdge.d.ts.map