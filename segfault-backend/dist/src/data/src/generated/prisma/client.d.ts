import * as runtime from "@prisma/client/runtime/library";
import * as $Class from "./internal/class";
import * as Prisma from "./internal/prismaNamespace";
export * as $Enums from './enums';
export * from "./enums";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model User
 *
 */
export type User = Prisma.UserModel;
/**
 * Model UserBadge
 *
 */
export type UserBadge = Prisma.UserBadgeModel;
/**
 * Model GuestToken
 *
 */
export type GuestToken = Prisma.GuestTokenModel;
/**
 * Model Issue
 *
 */
export type Issue = Prisma.IssueModel;
/**
 * Model IssueUpvote
 *
 */
export type IssueUpvote = Prisma.IssueUpvoteModel;
/**
 * Model IssueResolutionVote
 *
 */
export type IssueResolutionVote = Prisma.IssueResolutionVoteModel;
/**
 * Model Comment
 *
 */
export type Comment = Prisma.CommentModel;
/**
 * Model CommentUpvote
 *
 */
export type CommentUpvote = Prisma.CommentUpvoteModel;
/**
 * Model Notification
 *
 */
export type Notification = Prisma.NotificationModel;
//# sourceMappingURL=client.d.ts.map