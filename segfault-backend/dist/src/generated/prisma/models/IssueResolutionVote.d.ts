import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model IssueResolutionVote
 *
 */
export type IssueResolutionVoteModel = runtime.Types.Result.DefaultSelection<Prisma.$IssueResolutionVotePayload>;
export type AggregateIssueResolutionVote = {
    _count: IssueResolutionVoteCountAggregateOutputType | null;
    _avg: IssueResolutionVoteAvgAggregateOutputType | null;
    _sum: IssueResolutionVoteSumAggregateOutputType | null;
    _min: IssueResolutionVoteMinAggregateOutputType | null;
    _max: IssueResolutionVoteMaxAggregateOutputType | null;
};
export type IssueResolutionVoteAvgAggregateOutputType = {
    id: number | null;
    issueId: number | null;
    userId: number | null;
};
export type IssueResolutionVoteSumAggregateOutputType = {
    id: number | null;
    issueId: number | null;
    userId: number | null;
};
export type IssueResolutionVoteMinAggregateOutputType = {
    id: number | null;
    createdAt: Date | null;
    isResolved: boolean | null;
    issueId: number | null;
    userId: number | null;
};
export type IssueResolutionVoteMaxAggregateOutputType = {
    id: number | null;
    createdAt: Date | null;
    isResolved: boolean | null;
    issueId: number | null;
    userId: number | null;
};
export type IssueResolutionVoteCountAggregateOutputType = {
    id: number;
    createdAt: number;
    isResolved: number;
    issueId: number;
    userId: number;
    _all: number;
};
export type IssueResolutionVoteAvgAggregateInputType = {
    id?: true;
    issueId?: true;
    userId?: true;
};
export type IssueResolutionVoteSumAggregateInputType = {
    id?: true;
    issueId?: true;
    userId?: true;
};
export type IssueResolutionVoteMinAggregateInputType = {
    id?: true;
    createdAt?: true;
    isResolved?: true;
    issueId?: true;
    userId?: true;
};
export type IssueResolutionVoteMaxAggregateInputType = {
    id?: true;
    createdAt?: true;
    isResolved?: true;
    issueId?: true;
    userId?: true;
};
export type IssueResolutionVoteCountAggregateInputType = {
    id?: true;
    createdAt?: true;
    isResolved?: true;
    issueId?: true;
    userId?: true;
    _all?: true;
};
export type IssueResolutionVoteAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which IssueResolutionVote to aggregate.
     */
    where?: Prisma.IssueResolutionVoteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of IssueResolutionVotes to fetch.
     */
    orderBy?: Prisma.IssueResolutionVoteOrderByWithRelationInput | Prisma.IssueResolutionVoteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.IssueResolutionVoteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` IssueResolutionVotes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` IssueResolutionVotes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned IssueResolutionVotes
    **/
    _count?: true | IssueResolutionVoteCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: IssueResolutionVoteAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: IssueResolutionVoteSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: IssueResolutionVoteMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: IssueResolutionVoteMaxAggregateInputType;
};
export type GetIssueResolutionVoteAggregateType<T extends IssueResolutionVoteAggregateArgs> = {
    [P in keyof T & keyof AggregateIssueResolutionVote]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateIssueResolutionVote[P]> : Prisma.GetScalarType<T[P], AggregateIssueResolutionVote[P]>;
};
export type IssueResolutionVoteGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IssueResolutionVoteWhereInput;
    orderBy?: Prisma.IssueResolutionVoteOrderByWithAggregationInput | Prisma.IssueResolutionVoteOrderByWithAggregationInput[];
    by: Prisma.IssueResolutionVoteScalarFieldEnum[] | Prisma.IssueResolutionVoteScalarFieldEnum;
    having?: Prisma.IssueResolutionVoteScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: IssueResolutionVoteCountAggregateInputType | true;
    _avg?: IssueResolutionVoteAvgAggregateInputType;
    _sum?: IssueResolutionVoteSumAggregateInputType;
    _min?: IssueResolutionVoteMinAggregateInputType;
    _max?: IssueResolutionVoteMaxAggregateInputType;
};
export type IssueResolutionVoteGroupByOutputType = {
    id: number;
    createdAt: Date;
    isResolved: boolean;
    issueId: number;
    userId: number;
    _count: IssueResolutionVoteCountAggregateOutputType | null;
    _avg: IssueResolutionVoteAvgAggregateOutputType | null;
    _sum: IssueResolutionVoteSumAggregateOutputType | null;
    _min: IssueResolutionVoteMinAggregateOutputType | null;
    _max: IssueResolutionVoteMaxAggregateOutputType | null;
};
type GetIssueResolutionVoteGroupByPayload<T extends IssueResolutionVoteGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<IssueResolutionVoteGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof IssueResolutionVoteGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], IssueResolutionVoteGroupByOutputType[P]> : Prisma.GetScalarType<T[P], IssueResolutionVoteGroupByOutputType[P]>;
}>>;
export type IssueResolutionVoteWhereInput = {
    AND?: Prisma.IssueResolutionVoteWhereInput | Prisma.IssueResolutionVoteWhereInput[];
    OR?: Prisma.IssueResolutionVoteWhereInput[];
    NOT?: Prisma.IssueResolutionVoteWhereInput | Prisma.IssueResolutionVoteWhereInput[];
    id?: Prisma.IntFilter<"IssueResolutionVote"> | number;
    createdAt?: Prisma.DateTimeFilter<"IssueResolutionVote"> | Date | string;
    isResolved?: Prisma.BoolFilter<"IssueResolutionVote"> | boolean;
    issueId?: Prisma.IntFilter<"IssueResolutionVote"> | number;
    userId?: Prisma.IntFilter<"IssueResolutionVote"> | number;
    issue?: Prisma.XOR<Prisma.IssueScalarRelationFilter, Prisma.IssueWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type IssueResolutionVoteOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    isResolved?: Prisma.SortOrder;
    issueId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    issue?: Prisma.IssueOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type IssueResolutionVoteWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    issueId_userId?: Prisma.IssueResolutionVoteIssueIdUserIdCompoundUniqueInput;
    AND?: Prisma.IssueResolutionVoteWhereInput | Prisma.IssueResolutionVoteWhereInput[];
    OR?: Prisma.IssueResolutionVoteWhereInput[];
    NOT?: Prisma.IssueResolutionVoteWhereInput | Prisma.IssueResolutionVoteWhereInput[];
    createdAt?: Prisma.DateTimeFilter<"IssueResolutionVote"> | Date | string;
    isResolved?: Prisma.BoolFilter<"IssueResolutionVote"> | boolean;
    issueId?: Prisma.IntFilter<"IssueResolutionVote"> | number;
    userId?: Prisma.IntFilter<"IssueResolutionVote"> | number;
    issue?: Prisma.XOR<Prisma.IssueScalarRelationFilter, Prisma.IssueWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "issueId_userId">;
export type IssueResolutionVoteOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    isResolved?: Prisma.SortOrder;
    issueId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    _count?: Prisma.IssueResolutionVoteCountOrderByAggregateInput;
    _avg?: Prisma.IssueResolutionVoteAvgOrderByAggregateInput;
    _max?: Prisma.IssueResolutionVoteMaxOrderByAggregateInput;
    _min?: Prisma.IssueResolutionVoteMinOrderByAggregateInput;
    _sum?: Prisma.IssueResolutionVoteSumOrderByAggregateInput;
};
export type IssueResolutionVoteScalarWhereWithAggregatesInput = {
    AND?: Prisma.IssueResolutionVoteScalarWhereWithAggregatesInput | Prisma.IssueResolutionVoteScalarWhereWithAggregatesInput[];
    OR?: Prisma.IssueResolutionVoteScalarWhereWithAggregatesInput[];
    NOT?: Prisma.IssueResolutionVoteScalarWhereWithAggregatesInput | Prisma.IssueResolutionVoteScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"IssueResolutionVote"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"IssueResolutionVote"> | Date | string;
    isResolved?: Prisma.BoolWithAggregatesFilter<"IssueResolutionVote"> | boolean;
    issueId?: Prisma.IntWithAggregatesFilter<"IssueResolutionVote"> | number;
    userId?: Prisma.IntWithAggregatesFilter<"IssueResolutionVote"> | number;
};
export type IssueResolutionVoteCreateInput = {
    createdAt?: Date | string;
    isResolved: boolean;
    issue: Prisma.IssueCreateNestedOneWithoutResolutionVotesInput;
    user: Prisma.UserCreateNestedOneWithoutResolutionVotesInput;
};
export type IssueResolutionVoteUncheckedCreateInput = {
    id?: number;
    createdAt?: Date | string;
    isResolved: boolean;
    issueId: number;
    userId: number;
};
export type IssueResolutionVoteUpdateInput = {
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isResolved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    issue?: Prisma.IssueUpdateOneRequiredWithoutResolutionVotesNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutResolutionVotesNestedInput;
};
export type IssueResolutionVoteUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isResolved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    issueId?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type IssueResolutionVoteCreateManyInput = {
    id?: number;
    createdAt?: Date | string;
    isResolved: boolean;
    issueId: number;
    userId: number;
};
export type IssueResolutionVoteUpdateManyMutationInput = {
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isResolved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type IssueResolutionVoteUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isResolved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    issueId?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type IssueResolutionVoteListRelationFilter = {
    every?: Prisma.IssueResolutionVoteWhereInput;
    some?: Prisma.IssueResolutionVoteWhereInput;
    none?: Prisma.IssueResolutionVoteWhereInput;
};
export type IssueResolutionVoteOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type IssueResolutionVoteIssueIdUserIdCompoundUniqueInput = {
    issueId: number;
    userId: number;
};
export type IssueResolutionVoteCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    isResolved?: Prisma.SortOrder;
    issueId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type IssueResolutionVoteAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    issueId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type IssueResolutionVoteMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    isResolved?: Prisma.SortOrder;
    issueId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type IssueResolutionVoteMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    isResolved?: Prisma.SortOrder;
    issueId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type IssueResolutionVoteSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    issueId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type IssueResolutionVoteCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.IssueResolutionVoteCreateWithoutUserInput, Prisma.IssueResolutionVoteUncheckedCreateWithoutUserInput> | Prisma.IssueResolutionVoteCreateWithoutUserInput[] | Prisma.IssueResolutionVoteUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.IssueResolutionVoteCreateOrConnectWithoutUserInput | Prisma.IssueResolutionVoteCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.IssueResolutionVoteCreateManyUserInputEnvelope;
    connect?: Prisma.IssueResolutionVoteWhereUniqueInput | Prisma.IssueResolutionVoteWhereUniqueInput[];
};
export type IssueResolutionVoteUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.IssueResolutionVoteCreateWithoutUserInput, Prisma.IssueResolutionVoteUncheckedCreateWithoutUserInput> | Prisma.IssueResolutionVoteCreateWithoutUserInput[] | Prisma.IssueResolutionVoteUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.IssueResolutionVoteCreateOrConnectWithoutUserInput | Prisma.IssueResolutionVoteCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.IssueResolutionVoteCreateManyUserInputEnvelope;
    connect?: Prisma.IssueResolutionVoteWhereUniqueInput | Prisma.IssueResolutionVoteWhereUniqueInput[];
};
export type IssueResolutionVoteUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.IssueResolutionVoteCreateWithoutUserInput, Prisma.IssueResolutionVoteUncheckedCreateWithoutUserInput> | Prisma.IssueResolutionVoteCreateWithoutUserInput[] | Prisma.IssueResolutionVoteUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.IssueResolutionVoteCreateOrConnectWithoutUserInput | Prisma.IssueResolutionVoteCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.IssueResolutionVoteUpsertWithWhereUniqueWithoutUserInput | Prisma.IssueResolutionVoteUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.IssueResolutionVoteCreateManyUserInputEnvelope;
    set?: Prisma.IssueResolutionVoteWhereUniqueInput | Prisma.IssueResolutionVoteWhereUniqueInput[];
    disconnect?: Prisma.IssueResolutionVoteWhereUniqueInput | Prisma.IssueResolutionVoteWhereUniqueInput[];
    delete?: Prisma.IssueResolutionVoteWhereUniqueInput | Prisma.IssueResolutionVoteWhereUniqueInput[];
    connect?: Prisma.IssueResolutionVoteWhereUniqueInput | Prisma.IssueResolutionVoteWhereUniqueInput[];
    update?: Prisma.IssueResolutionVoteUpdateWithWhereUniqueWithoutUserInput | Prisma.IssueResolutionVoteUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.IssueResolutionVoteUpdateManyWithWhereWithoutUserInput | Prisma.IssueResolutionVoteUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.IssueResolutionVoteScalarWhereInput | Prisma.IssueResolutionVoteScalarWhereInput[];
};
export type IssueResolutionVoteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.IssueResolutionVoteCreateWithoutUserInput, Prisma.IssueResolutionVoteUncheckedCreateWithoutUserInput> | Prisma.IssueResolutionVoteCreateWithoutUserInput[] | Prisma.IssueResolutionVoteUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.IssueResolutionVoteCreateOrConnectWithoutUserInput | Prisma.IssueResolutionVoteCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.IssueResolutionVoteUpsertWithWhereUniqueWithoutUserInput | Prisma.IssueResolutionVoteUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.IssueResolutionVoteCreateManyUserInputEnvelope;
    set?: Prisma.IssueResolutionVoteWhereUniqueInput | Prisma.IssueResolutionVoteWhereUniqueInput[];
    disconnect?: Prisma.IssueResolutionVoteWhereUniqueInput | Prisma.IssueResolutionVoteWhereUniqueInput[];
    delete?: Prisma.IssueResolutionVoteWhereUniqueInput | Prisma.IssueResolutionVoteWhereUniqueInput[];
    connect?: Prisma.IssueResolutionVoteWhereUniqueInput | Prisma.IssueResolutionVoteWhereUniqueInput[];
    update?: Prisma.IssueResolutionVoteUpdateWithWhereUniqueWithoutUserInput | Prisma.IssueResolutionVoteUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.IssueResolutionVoteUpdateManyWithWhereWithoutUserInput | Prisma.IssueResolutionVoteUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.IssueResolutionVoteScalarWhereInput | Prisma.IssueResolutionVoteScalarWhereInput[];
};
export type IssueResolutionVoteCreateNestedManyWithoutIssueInput = {
    create?: Prisma.XOR<Prisma.IssueResolutionVoteCreateWithoutIssueInput, Prisma.IssueResolutionVoteUncheckedCreateWithoutIssueInput> | Prisma.IssueResolutionVoteCreateWithoutIssueInput[] | Prisma.IssueResolutionVoteUncheckedCreateWithoutIssueInput[];
    connectOrCreate?: Prisma.IssueResolutionVoteCreateOrConnectWithoutIssueInput | Prisma.IssueResolutionVoteCreateOrConnectWithoutIssueInput[];
    createMany?: Prisma.IssueResolutionVoteCreateManyIssueInputEnvelope;
    connect?: Prisma.IssueResolutionVoteWhereUniqueInput | Prisma.IssueResolutionVoteWhereUniqueInput[];
};
export type IssueResolutionVoteUncheckedCreateNestedManyWithoutIssueInput = {
    create?: Prisma.XOR<Prisma.IssueResolutionVoteCreateWithoutIssueInput, Prisma.IssueResolutionVoteUncheckedCreateWithoutIssueInput> | Prisma.IssueResolutionVoteCreateWithoutIssueInput[] | Prisma.IssueResolutionVoteUncheckedCreateWithoutIssueInput[];
    connectOrCreate?: Prisma.IssueResolutionVoteCreateOrConnectWithoutIssueInput | Prisma.IssueResolutionVoteCreateOrConnectWithoutIssueInput[];
    createMany?: Prisma.IssueResolutionVoteCreateManyIssueInputEnvelope;
    connect?: Prisma.IssueResolutionVoteWhereUniqueInput | Prisma.IssueResolutionVoteWhereUniqueInput[];
};
export type IssueResolutionVoteUpdateManyWithoutIssueNestedInput = {
    create?: Prisma.XOR<Prisma.IssueResolutionVoteCreateWithoutIssueInput, Prisma.IssueResolutionVoteUncheckedCreateWithoutIssueInput> | Prisma.IssueResolutionVoteCreateWithoutIssueInput[] | Prisma.IssueResolutionVoteUncheckedCreateWithoutIssueInput[];
    connectOrCreate?: Prisma.IssueResolutionVoteCreateOrConnectWithoutIssueInput | Prisma.IssueResolutionVoteCreateOrConnectWithoutIssueInput[];
    upsert?: Prisma.IssueResolutionVoteUpsertWithWhereUniqueWithoutIssueInput | Prisma.IssueResolutionVoteUpsertWithWhereUniqueWithoutIssueInput[];
    createMany?: Prisma.IssueResolutionVoteCreateManyIssueInputEnvelope;
    set?: Prisma.IssueResolutionVoteWhereUniqueInput | Prisma.IssueResolutionVoteWhereUniqueInput[];
    disconnect?: Prisma.IssueResolutionVoteWhereUniqueInput | Prisma.IssueResolutionVoteWhereUniqueInput[];
    delete?: Prisma.IssueResolutionVoteWhereUniqueInput | Prisma.IssueResolutionVoteWhereUniqueInput[];
    connect?: Prisma.IssueResolutionVoteWhereUniqueInput | Prisma.IssueResolutionVoteWhereUniqueInput[];
    update?: Prisma.IssueResolutionVoteUpdateWithWhereUniqueWithoutIssueInput | Prisma.IssueResolutionVoteUpdateWithWhereUniqueWithoutIssueInput[];
    updateMany?: Prisma.IssueResolutionVoteUpdateManyWithWhereWithoutIssueInput | Prisma.IssueResolutionVoteUpdateManyWithWhereWithoutIssueInput[];
    deleteMany?: Prisma.IssueResolutionVoteScalarWhereInput | Prisma.IssueResolutionVoteScalarWhereInput[];
};
export type IssueResolutionVoteUncheckedUpdateManyWithoutIssueNestedInput = {
    create?: Prisma.XOR<Prisma.IssueResolutionVoteCreateWithoutIssueInput, Prisma.IssueResolutionVoteUncheckedCreateWithoutIssueInput> | Prisma.IssueResolutionVoteCreateWithoutIssueInput[] | Prisma.IssueResolutionVoteUncheckedCreateWithoutIssueInput[];
    connectOrCreate?: Prisma.IssueResolutionVoteCreateOrConnectWithoutIssueInput | Prisma.IssueResolutionVoteCreateOrConnectWithoutIssueInput[];
    upsert?: Prisma.IssueResolutionVoteUpsertWithWhereUniqueWithoutIssueInput | Prisma.IssueResolutionVoteUpsertWithWhereUniqueWithoutIssueInput[];
    createMany?: Prisma.IssueResolutionVoteCreateManyIssueInputEnvelope;
    set?: Prisma.IssueResolutionVoteWhereUniqueInput | Prisma.IssueResolutionVoteWhereUniqueInput[];
    disconnect?: Prisma.IssueResolutionVoteWhereUniqueInput | Prisma.IssueResolutionVoteWhereUniqueInput[];
    delete?: Prisma.IssueResolutionVoteWhereUniqueInput | Prisma.IssueResolutionVoteWhereUniqueInput[];
    connect?: Prisma.IssueResolutionVoteWhereUniqueInput | Prisma.IssueResolutionVoteWhereUniqueInput[];
    update?: Prisma.IssueResolutionVoteUpdateWithWhereUniqueWithoutIssueInput | Prisma.IssueResolutionVoteUpdateWithWhereUniqueWithoutIssueInput[];
    updateMany?: Prisma.IssueResolutionVoteUpdateManyWithWhereWithoutIssueInput | Prisma.IssueResolutionVoteUpdateManyWithWhereWithoutIssueInput[];
    deleteMany?: Prisma.IssueResolutionVoteScalarWhereInput | Prisma.IssueResolutionVoteScalarWhereInput[];
};
export type IssueResolutionVoteCreateWithoutUserInput = {
    createdAt?: Date | string;
    isResolved: boolean;
    issue: Prisma.IssueCreateNestedOneWithoutResolutionVotesInput;
};
export type IssueResolutionVoteUncheckedCreateWithoutUserInput = {
    id?: number;
    createdAt?: Date | string;
    isResolved: boolean;
    issueId: number;
};
export type IssueResolutionVoteCreateOrConnectWithoutUserInput = {
    where: Prisma.IssueResolutionVoteWhereUniqueInput;
    create: Prisma.XOR<Prisma.IssueResolutionVoteCreateWithoutUserInput, Prisma.IssueResolutionVoteUncheckedCreateWithoutUserInput>;
};
export type IssueResolutionVoteCreateManyUserInputEnvelope = {
    data: Prisma.IssueResolutionVoteCreateManyUserInput | Prisma.IssueResolutionVoteCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type IssueResolutionVoteUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.IssueResolutionVoteWhereUniqueInput;
    update: Prisma.XOR<Prisma.IssueResolutionVoteUpdateWithoutUserInput, Prisma.IssueResolutionVoteUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.IssueResolutionVoteCreateWithoutUserInput, Prisma.IssueResolutionVoteUncheckedCreateWithoutUserInput>;
};
export type IssueResolutionVoteUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.IssueResolutionVoteWhereUniqueInput;
    data: Prisma.XOR<Prisma.IssueResolutionVoteUpdateWithoutUserInput, Prisma.IssueResolutionVoteUncheckedUpdateWithoutUserInput>;
};
export type IssueResolutionVoteUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.IssueResolutionVoteScalarWhereInput;
    data: Prisma.XOR<Prisma.IssueResolutionVoteUpdateManyMutationInput, Prisma.IssueResolutionVoteUncheckedUpdateManyWithoutUserInput>;
};
export type IssueResolutionVoteScalarWhereInput = {
    AND?: Prisma.IssueResolutionVoteScalarWhereInput | Prisma.IssueResolutionVoteScalarWhereInput[];
    OR?: Prisma.IssueResolutionVoteScalarWhereInput[];
    NOT?: Prisma.IssueResolutionVoteScalarWhereInput | Prisma.IssueResolutionVoteScalarWhereInput[];
    id?: Prisma.IntFilter<"IssueResolutionVote"> | number;
    createdAt?: Prisma.DateTimeFilter<"IssueResolutionVote"> | Date | string;
    isResolved?: Prisma.BoolFilter<"IssueResolutionVote"> | boolean;
    issueId?: Prisma.IntFilter<"IssueResolutionVote"> | number;
    userId?: Prisma.IntFilter<"IssueResolutionVote"> | number;
};
export type IssueResolutionVoteCreateWithoutIssueInput = {
    createdAt?: Date | string;
    isResolved: boolean;
    user: Prisma.UserCreateNestedOneWithoutResolutionVotesInput;
};
export type IssueResolutionVoteUncheckedCreateWithoutIssueInput = {
    id?: number;
    createdAt?: Date | string;
    isResolved: boolean;
    userId: number;
};
export type IssueResolutionVoteCreateOrConnectWithoutIssueInput = {
    where: Prisma.IssueResolutionVoteWhereUniqueInput;
    create: Prisma.XOR<Prisma.IssueResolutionVoteCreateWithoutIssueInput, Prisma.IssueResolutionVoteUncheckedCreateWithoutIssueInput>;
};
export type IssueResolutionVoteCreateManyIssueInputEnvelope = {
    data: Prisma.IssueResolutionVoteCreateManyIssueInput | Prisma.IssueResolutionVoteCreateManyIssueInput[];
    skipDuplicates?: boolean;
};
export type IssueResolutionVoteUpsertWithWhereUniqueWithoutIssueInput = {
    where: Prisma.IssueResolutionVoteWhereUniqueInput;
    update: Prisma.XOR<Prisma.IssueResolutionVoteUpdateWithoutIssueInput, Prisma.IssueResolutionVoteUncheckedUpdateWithoutIssueInput>;
    create: Prisma.XOR<Prisma.IssueResolutionVoteCreateWithoutIssueInput, Prisma.IssueResolutionVoteUncheckedCreateWithoutIssueInput>;
};
export type IssueResolutionVoteUpdateWithWhereUniqueWithoutIssueInput = {
    where: Prisma.IssueResolutionVoteWhereUniqueInput;
    data: Prisma.XOR<Prisma.IssueResolutionVoteUpdateWithoutIssueInput, Prisma.IssueResolutionVoteUncheckedUpdateWithoutIssueInput>;
};
export type IssueResolutionVoteUpdateManyWithWhereWithoutIssueInput = {
    where: Prisma.IssueResolutionVoteScalarWhereInput;
    data: Prisma.XOR<Prisma.IssueResolutionVoteUpdateManyMutationInput, Prisma.IssueResolutionVoteUncheckedUpdateManyWithoutIssueInput>;
};
export type IssueResolutionVoteCreateManyUserInput = {
    id?: number;
    createdAt?: Date | string;
    isResolved: boolean;
    issueId: number;
};
export type IssueResolutionVoteUpdateWithoutUserInput = {
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isResolved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    issue?: Prisma.IssueUpdateOneRequiredWithoutResolutionVotesNestedInput;
};
export type IssueResolutionVoteUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isResolved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    issueId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type IssueResolutionVoteUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isResolved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    issueId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type IssueResolutionVoteCreateManyIssueInput = {
    id?: number;
    createdAt?: Date | string;
    isResolved: boolean;
    userId: number;
};
export type IssueResolutionVoteUpdateWithoutIssueInput = {
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isResolved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    user?: Prisma.UserUpdateOneRequiredWithoutResolutionVotesNestedInput;
};
export type IssueResolutionVoteUncheckedUpdateWithoutIssueInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isResolved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type IssueResolutionVoteUncheckedUpdateManyWithoutIssueInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isResolved?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type IssueResolutionVoteSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    createdAt?: boolean;
    isResolved?: boolean;
    issueId?: boolean;
    userId?: boolean;
    issue?: boolean | Prisma.IssueDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["issueResolutionVote"]>;
export type IssueResolutionVoteSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    createdAt?: boolean;
    isResolved?: boolean;
    issueId?: boolean;
    userId?: boolean;
    issue?: boolean | Prisma.IssueDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["issueResolutionVote"]>;
export type IssueResolutionVoteSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    createdAt?: boolean;
    isResolved?: boolean;
    issueId?: boolean;
    userId?: boolean;
    issue?: boolean | Prisma.IssueDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["issueResolutionVote"]>;
export type IssueResolutionVoteSelectScalar = {
    id?: boolean;
    createdAt?: boolean;
    isResolved?: boolean;
    issueId?: boolean;
    userId?: boolean;
};
export type IssueResolutionVoteOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "createdAt" | "isResolved" | "issueId" | "userId", ExtArgs["result"]["issueResolutionVote"]>;
export type IssueResolutionVoteInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    issue?: boolean | Prisma.IssueDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type IssueResolutionVoteIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    issue?: boolean | Prisma.IssueDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type IssueResolutionVoteIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    issue?: boolean | Prisma.IssueDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $IssueResolutionVotePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "IssueResolutionVote";
    objects: {
        issue: Prisma.$IssuePayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        createdAt: Date;
        isResolved: boolean;
        issueId: number;
        userId: number;
    }, ExtArgs["result"]["issueResolutionVote"]>;
    composites: {};
};
export type IssueResolutionVoteGetPayload<S extends boolean | null | undefined | IssueResolutionVoteDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$IssueResolutionVotePayload, S>;
export type IssueResolutionVoteCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<IssueResolutionVoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: IssueResolutionVoteCountAggregateInputType | true;
};
export interface IssueResolutionVoteDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['IssueResolutionVote'];
        meta: {
            name: 'IssueResolutionVote';
        };
    };
    /**
     * Find zero or one IssueResolutionVote that matches the filter.
     * @param {IssueResolutionVoteFindUniqueArgs} args - Arguments to find a IssueResolutionVote
     * @example
     * // Get one IssueResolutionVote
     * const issueResolutionVote = await prisma.issueResolutionVote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IssueResolutionVoteFindUniqueArgs>(args: Prisma.SelectSubset<T, IssueResolutionVoteFindUniqueArgs<ExtArgs>>): Prisma.Prisma__IssueResolutionVoteClient<runtime.Types.Result.GetResult<Prisma.$IssueResolutionVotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one IssueResolutionVote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IssueResolutionVoteFindUniqueOrThrowArgs} args - Arguments to find a IssueResolutionVote
     * @example
     * // Get one IssueResolutionVote
     * const issueResolutionVote = await prisma.issueResolutionVote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IssueResolutionVoteFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, IssueResolutionVoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__IssueResolutionVoteClient<runtime.Types.Result.GetResult<Prisma.$IssueResolutionVotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first IssueResolutionVote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueResolutionVoteFindFirstArgs} args - Arguments to find a IssueResolutionVote
     * @example
     * // Get one IssueResolutionVote
     * const issueResolutionVote = await prisma.issueResolutionVote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IssueResolutionVoteFindFirstArgs>(args?: Prisma.SelectSubset<T, IssueResolutionVoteFindFirstArgs<ExtArgs>>): Prisma.Prisma__IssueResolutionVoteClient<runtime.Types.Result.GetResult<Prisma.$IssueResolutionVotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first IssueResolutionVote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueResolutionVoteFindFirstOrThrowArgs} args - Arguments to find a IssueResolutionVote
     * @example
     * // Get one IssueResolutionVote
     * const issueResolutionVote = await prisma.issueResolutionVote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IssueResolutionVoteFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, IssueResolutionVoteFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__IssueResolutionVoteClient<runtime.Types.Result.GetResult<Prisma.$IssueResolutionVotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more IssueResolutionVotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueResolutionVoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IssueResolutionVotes
     * const issueResolutionVotes = await prisma.issueResolutionVote.findMany()
     *
     * // Get first 10 IssueResolutionVotes
     * const issueResolutionVotes = await prisma.issueResolutionVote.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const issueResolutionVoteWithIdOnly = await prisma.issueResolutionVote.findMany({ select: { id: true } })
     *
     */
    findMany<T extends IssueResolutionVoteFindManyArgs>(args?: Prisma.SelectSubset<T, IssueResolutionVoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IssueResolutionVotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a IssueResolutionVote.
     * @param {IssueResolutionVoteCreateArgs} args - Arguments to create a IssueResolutionVote.
     * @example
     * // Create one IssueResolutionVote
     * const IssueResolutionVote = await prisma.issueResolutionVote.create({
     *   data: {
     *     // ... data to create a IssueResolutionVote
     *   }
     * })
     *
     */
    create<T extends IssueResolutionVoteCreateArgs>(args: Prisma.SelectSubset<T, IssueResolutionVoteCreateArgs<ExtArgs>>): Prisma.Prisma__IssueResolutionVoteClient<runtime.Types.Result.GetResult<Prisma.$IssueResolutionVotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many IssueResolutionVotes.
     * @param {IssueResolutionVoteCreateManyArgs} args - Arguments to create many IssueResolutionVotes.
     * @example
     * // Create many IssueResolutionVotes
     * const issueResolutionVote = await prisma.issueResolutionVote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends IssueResolutionVoteCreateManyArgs>(args?: Prisma.SelectSubset<T, IssueResolutionVoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many IssueResolutionVotes and returns the data saved in the database.
     * @param {IssueResolutionVoteCreateManyAndReturnArgs} args - Arguments to create many IssueResolutionVotes.
     * @example
     * // Create many IssueResolutionVotes
     * const issueResolutionVote = await prisma.issueResolutionVote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many IssueResolutionVotes and only return the `id`
     * const issueResolutionVoteWithIdOnly = await prisma.issueResolutionVote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends IssueResolutionVoteCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, IssueResolutionVoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IssueResolutionVotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a IssueResolutionVote.
     * @param {IssueResolutionVoteDeleteArgs} args - Arguments to delete one IssueResolutionVote.
     * @example
     * // Delete one IssueResolutionVote
     * const IssueResolutionVote = await prisma.issueResolutionVote.delete({
     *   where: {
     *     // ... filter to delete one IssueResolutionVote
     *   }
     * })
     *
     */
    delete<T extends IssueResolutionVoteDeleteArgs>(args: Prisma.SelectSubset<T, IssueResolutionVoteDeleteArgs<ExtArgs>>): Prisma.Prisma__IssueResolutionVoteClient<runtime.Types.Result.GetResult<Prisma.$IssueResolutionVotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one IssueResolutionVote.
     * @param {IssueResolutionVoteUpdateArgs} args - Arguments to update one IssueResolutionVote.
     * @example
     * // Update one IssueResolutionVote
     * const issueResolutionVote = await prisma.issueResolutionVote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends IssueResolutionVoteUpdateArgs>(args: Prisma.SelectSubset<T, IssueResolutionVoteUpdateArgs<ExtArgs>>): Prisma.Prisma__IssueResolutionVoteClient<runtime.Types.Result.GetResult<Prisma.$IssueResolutionVotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more IssueResolutionVotes.
     * @param {IssueResolutionVoteDeleteManyArgs} args - Arguments to filter IssueResolutionVotes to delete.
     * @example
     * // Delete a few IssueResolutionVotes
     * const { count } = await prisma.issueResolutionVote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends IssueResolutionVoteDeleteManyArgs>(args?: Prisma.SelectSubset<T, IssueResolutionVoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more IssueResolutionVotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueResolutionVoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IssueResolutionVotes
     * const issueResolutionVote = await prisma.issueResolutionVote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends IssueResolutionVoteUpdateManyArgs>(args: Prisma.SelectSubset<T, IssueResolutionVoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more IssueResolutionVotes and returns the data updated in the database.
     * @param {IssueResolutionVoteUpdateManyAndReturnArgs} args - Arguments to update many IssueResolutionVotes.
     * @example
     * // Update many IssueResolutionVotes
     * const issueResolutionVote = await prisma.issueResolutionVote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more IssueResolutionVotes and only return the `id`
     * const issueResolutionVoteWithIdOnly = await prisma.issueResolutionVote.updateManyAndReturn({
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
    updateManyAndReturn<T extends IssueResolutionVoteUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, IssueResolutionVoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IssueResolutionVotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one IssueResolutionVote.
     * @param {IssueResolutionVoteUpsertArgs} args - Arguments to update or create a IssueResolutionVote.
     * @example
     * // Update or create a IssueResolutionVote
     * const issueResolutionVote = await prisma.issueResolutionVote.upsert({
     *   create: {
     *     // ... data to create a IssueResolutionVote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IssueResolutionVote we want to update
     *   }
     * })
     */
    upsert<T extends IssueResolutionVoteUpsertArgs>(args: Prisma.SelectSubset<T, IssueResolutionVoteUpsertArgs<ExtArgs>>): Prisma.Prisma__IssueResolutionVoteClient<runtime.Types.Result.GetResult<Prisma.$IssueResolutionVotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of IssueResolutionVotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueResolutionVoteCountArgs} args - Arguments to filter IssueResolutionVotes to count.
     * @example
     * // Count the number of IssueResolutionVotes
     * const count = await prisma.issueResolutionVote.count({
     *   where: {
     *     // ... the filter for the IssueResolutionVotes we want to count
     *   }
     * })
    **/
    count<T extends IssueResolutionVoteCountArgs>(args?: Prisma.Subset<T, IssueResolutionVoteCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], IssueResolutionVoteCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a IssueResolutionVote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueResolutionVoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IssueResolutionVoteAggregateArgs>(args: Prisma.Subset<T, IssueResolutionVoteAggregateArgs>): Prisma.PrismaPromise<GetIssueResolutionVoteAggregateType<T>>;
    /**
     * Group by IssueResolutionVote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueResolutionVoteGroupByArgs} args - Group by arguments.
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
    groupBy<T extends IssueResolutionVoteGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: IssueResolutionVoteGroupByArgs['orderBy'];
    } : {
        orderBy?: IssueResolutionVoteGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, IssueResolutionVoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIssueResolutionVoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the IssueResolutionVote model
     */
    readonly fields: IssueResolutionVoteFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for IssueResolutionVote.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__IssueResolutionVoteClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    issue<T extends Prisma.IssueDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.IssueDefaultArgs<ExtArgs>>): Prisma.Prisma__IssueClient<runtime.Types.Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the IssueResolutionVote model
 */
export interface IssueResolutionVoteFieldRefs {
    readonly id: Prisma.FieldRef<"IssueResolutionVote", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"IssueResolutionVote", 'DateTime'>;
    readonly isResolved: Prisma.FieldRef<"IssueResolutionVote", 'Boolean'>;
    readonly issueId: Prisma.FieldRef<"IssueResolutionVote", 'Int'>;
    readonly userId: Prisma.FieldRef<"IssueResolutionVote", 'Int'>;
}
/**
 * IssueResolutionVote findUnique
 */
export type IssueResolutionVoteFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which IssueResolutionVote to fetch.
     */
    where: Prisma.IssueResolutionVoteWhereUniqueInput;
};
/**
 * IssueResolutionVote findUniqueOrThrow
 */
export type IssueResolutionVoteFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which IssueResolutionVote to fetch.
     */
    where: Prisma.IssueResolutionVoteWhereUniqueInput;
};
/**
 * IssueResolutionVote findFirst
 */
export type IssueResolutionVoteFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which IssueResolutionVote to fetch.
     */
    where?: Prisma.IssueResolutionVoteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of IssueResolutionVotes to fetch.
     */
    orderBy?: Prisma.IssueResolutionVoteOrderByWithRelationInput | Prisma.IssueResolutionVoteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for IssueResolutionVotes.
     */
    cursor?: Prisma.IssueResolutionVoteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` IssueResolutionVotes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` IssueResolutionVotes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of IssueResolutionVotes.
     */
    distinct?: Prisma.IssueResolutionVoteScalarFieldEnum | Prisma.IssueResolutionVoteScalarFieldEnum[];
};
/**
 * IssueResolutionVote findFirstOrThrow
 */
export type IssueResolutionVoteFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which IssueResolutionVote to fetch.
     */
    where?: Prisma.IssueResolutionVoteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of IssueResolutionVotes to fetch.
     */
    orderBy?: Prisma.IssueResolutionVoteOrderByWithRelationInput | Prisma.IssueResolutionVoteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for IssueResolutionVotes.
     */
    cursor?: Prisma.IssueResolutionVoteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` IssueResolutionVotes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` IssueResolutionVotes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of IssueResolutionVotes.
     */
    distinct?: Prisma.IssueResolutionVoteScalarFieldEnum | Prisma.IssueResolutionVoteScalarFieldEnum[];
};
/**
 * IssueResolutionVote findMany
 */
export type IssueResolutionVoteFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which IssueResolutionVotes to fetch.
     */
    where?: Prisma.IssueResolutionVoteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of IssueResolutionVotes to fetch.
     */
    orderBy?: Prisma.IssueResolutionVoteOrderByWithRelationInput | Prisma.IssueResolutionVoteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing IssueResolutionVotes.
     */
    cursor?: Prisma.IssueResolutionVoteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` IssueResolutionVotes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` IssueResolutionVotes.
     */
    skip?: number;
    distinct?: Prisma.IssueResolutionVoteScalarFieldEnum | Prisma.IssueResolutionVoteScalarFieldEnum[];
};
/**
 * IssueResolutionVote create
 */
export type IssueResolutionVoteCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a IssueResolutionVote.
     */
    data: Prisma.XOR<Prisma.IssueResolutionVoteCreateInput, Prisma.IssueResolutionVoteUncheckedCreateInput>;
};
/**
 * IssueResolutionVote createMany
 */
export type IssueResolutionVoteCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many IssueResolutionVotes.
     */
    data: Prisma.IssueResolutionVoteCreateManyInput | Prisma.IssueResolutionVoteCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * IssueResolutionVote createManyAndReturn
 */
export type IssueResolutionVoteCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueResolutionVote
     */
    select?: Prisma.IssueResolutionVoteSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the IssueResolutionVote
     */
    omit?: Prisma.IssueResolutionVoteOmit<ExtArgs> | null;
    /**
     * The data used to create many IssueResolutionVotes.
     */
    data: Prisma.IssueResolutionVoteCreateManyInput | Prisma.IssueResolutionVoteCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.IssueResolutionVoteIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * IssueResolutionVote update
 */
export type IssueResolutionVoteUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a IssueResolutionVote.
     */
    data: Prisma.XOR<Prisma.IssueResolutionVoteUpdateInput, Prisma.IssueResolutionVoteUncheckedUpdateInput>;
    /**
     * Choose, which IssueResolutionVote to update.
     */
    where: Prisma.IssueResolutionVoteWhereUniqueInput;
};
/**
 * IssueResolutionVote updateMany
 */
export type IssueResolutionVoteUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update IssueResolutionVotes.
     */
    data: Prisma.XOR<Prisma.IssueResolutionVoteUpdateManyMutationInput, Prisma.IssueResolutionVoteUncheckedUpdateManyInput>;
    /**
     * Filter which IssueResolutionVotes to update
     */
    where?: Prisma.IssueResolutionVoteWhereInput;
    /**
     * Limit how many IssueResolutionVotes to update.
     */
    limit?: number;
};
/**
 * IssueResolutionVote updateManyAndReturn
 */
export type IssueResolutionVoteUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueResolutionVote
     */
    select?: Prisma.IssueResolutionVoteSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the IssueResolutionVote
     */
    omit?: Prisma.IssueResolutionVoteOmit<ExtArgs> | null;
    /**
     * The data used to update IssueResolutionVotes.
     */
    data: Prisma.XOR<Prisma.IssueResolutionVoteUpdateManyMutationInput, Prisma.IssueResolutionVoteUncheckedUpdateManyInput>;
    /**
     * Filter which IssueResolutionVotes to update
     */
    where?: Prisma.IssueResolutionVoteWhereInput;
    /**
     * Limit how many IssueResolutionVotes to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.IssueResolutionVoteIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * IssueResolutionVote upsert
 */
export type IssueResolutionVoteUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the IssueResolutionVote to update in case it exists.
     */
    where: Prisma.IssueResolutionVoteWhereUniqueInput;
    /**
     * In case the IssueResolutionVote found by the `where` argument doesn't exist, create a new IssueResolutionVote with this data.
     */
    create: Prisma.XOR<Prisma.IssueResolutionVoteCreateInput, Prisma.IssueResolutionVoteUncheckedCreateInput>;
    /**
     * In case the IssueResolutionVote was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.IssueResolutionVoteUpdateInput, Prisma.IssueResolutionVoteUncheckedUpdateInput>;
};
/**
 * IssueResolutionVote delete
 */
export type IssueResolutionVoteDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which IssueResolutionVote to delete.
     */
    where: Prisma.IssueResolutionVoteWhereUniqueInput;
};
/**
 * IssueResolutionVote deleteMany
 */
export type IssueResolutionVoteDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which IssueResolutionVotes to delete
     */
    where?: Prisma.IssueResolutionVoteWhereInput;
    /**
     * Limit how many IssueResolutionVotes to delete.
     */
    limit?: number;
};
/**
 * IssueResolutionVote without action
 */
export type IssueResolutionVoteDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=IssueResolutionVote.d.ts.map