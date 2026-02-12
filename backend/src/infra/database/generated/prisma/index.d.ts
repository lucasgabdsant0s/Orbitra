import * as runtime from './runtime/client.js';
import $Types = runtime.Types 
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result
export type PrismaPromise<T> = $Public.PrismaPromise<T>
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
export type Tenant = $Result.DefaultSelection<Prisma.$TenantPayload>
export type RefreshToken = $Result.DefaultSelection<Prisma.$RefreshTokenPayload>
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
export type Invite = $Result.DefaultSelection<Prisma.$InvitePayload>
export type ProjectMember = $Result.DefaultSelection<Prisma.$ProjectMemberPayload>
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
export type EmailVerification = $Result.DefaultSelection<Prisma.$EmailVerificationPayload>
export namespace $Enums {
  export const Role: {
  OWNER: 'OWNER',
  ADMIN: 'ADMIN',
  MEMBER: 'MEMBER',
  GUEST: 'GUEST'
};
export type Role = (typeof Role)[keyof typeof Role]
export const ProjectStatus: {
  ACTIVE: 'ACTIVE',
  ARCHIVED: 'ARCHIVED',
  COMPLETED: 'COMPLETED'
};
export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus]
export const TaskStatus: {
  TODO: 'TODO',
  IN_PROGRESS: 'IN_PROGRESS',
  DONE: 'DONE',
  BLOCKED: 'BLOCKED'
};
export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus]
export const TaskPriority: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  URGENT: 'URGENT'
};
export type TaskPriority = (typeof TaskPriority)[keyof typeof TaskPriority]
export const InviteStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED'
};
export type InviteStatus = (typeof InviteStatus)[keyof typeof InviteStatus]
export const AuditAction: {
  CREATE: 'CREATE',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE'
};
export type AuditAction = (typeof AuditAction)[keyof typeof AuditAction]
export const AuditEntityType: {
  PROJECT: 'PROJECT',
  TASK: 'TASK'
};
export type AuditEntityType = (typeof AuditEntityType)[keyof typeof AuditEntityType]
export const NotificationType: {
  COMMENT: 'COMMENT',
  INVITE: 'INVITE',
  TASK_ASSIGN: 'TASK_ASSIGN',
  DEADLINE: 'DEADLINE',
  PROJECT_UPDATE: 'PROJECT_UPDATE'
};
export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType]
}
export type Role = $Enums.Role
export const Role: typeof $Enums.Role
export type ProjectStatus = $Enums.ProjectStatus
export const ProjectStatus: typeof $Enums.ProjectStatus
export type TaskStatus = $Enums.TaskStatus
export const TaskStatus: typeof $Enums.TaskStatus
export type TaskPriority = $Enums.TaskPriority
export const TaskPriority: typeof $Enums.TaskPriority
export type InviteStatus = $Enums.InviteStatus
export const InviteStatus: typeof $Enums.InviteStatus
export type AuditAction = $Enums.AuditAction
export const AuditAction: typeof $Enums.AuditAction
export type AuditEntityType = $Enums.AuditEntityType
export const AuditEntityType: typeof $Enums.AuditEntityType
export type NotificationType = $Enums.NotificationType
export const NotificationType: typeof $Enums.NotificationType
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }
  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
  $connect(): $Utils.JsPromise<void>;
  $disconnect(): $Utils.JsPromise<void>;
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>
  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>
  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
  get tenant(): Prisma.TenantDelegate<ExtArgs, ClientOptions>;
  get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs, ClientOptions>;
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;
  get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;
  get invite(): Prisma.InviteDelegate<ExtArgs, ClientOptions>;
  get projectMember(): Prisma.ProjectMemberDelegate<ExtArgs, ClientOptions>;
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;
  get emailVerification(): Prisma.EmailVerificationDelegate<ExtArgs, ClientOptions>;
}
export namespace Prisma {
  export import DMMF = runtime.DMMF
  export type PrismaPromise<T> = $Public.PrismaPromise<T>
  export import validator = runtime.Public.validator
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql
  export import Decimal = runtime.Decimal
  export type DecimalJsLike = runtime.DecimalJsLike
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact
  export type PrismaVersion = {
    client: string
    engine: string
  }
  export const prismaVersion: PrismaVersion
  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue
  namespace NullTypes {
    class DbNull {
      private DbNull: never
      private constructor()
    }
    class JsonNull {
      private JsonNull: never
      private constructor()
    }
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }
  export const DbNull: NullTypes.DbNull
  export const JsonNull: NullTypes.JsonNull
  export const AnyNull: NullTypes.AnyNull
  type SelectAndInclude = {
    select: any
    include: any
  }
  type SelectAndOmit = {
    select: any
    omit: any
  }
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };
  export type Enumerable<T> = T | Array<T>;
  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]
  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }
  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K
  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T
  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      [P in K]: Prisma__Pick<O, P & keyof O> 
    }[K]
  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>
  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>
  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]
  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never
  export type Union = any
  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never
  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};
  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;
  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];
  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};
  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};
  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };
  type NoExpand<T> = T extends unknown ? T : never;
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;
  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
  export type Boolean = True | False
  export type True = 1
  export type False = 0
  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]
  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 
    : A1 extends A2
    ? 1
    : 0
  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >
  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]
  export type Keys<U extends Union> = U extends unknown ? keyof U : never
  type Cast<A, B> = A extends B ? A : B;
  export const type: unique symbol;
  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never
  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T
  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? 
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T
  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>
  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>
  export const ModelName: {
    User: 'User',
    Tenant: 'Tenant',
    RefreshToken: 'RefreshToken',
    Project: 'Project',
    Task: 'Task',
    Comment: 'Comment',
    Invite: 'Invite',
    ProjectMember: 'ProjectMember',
    AuditLog: 'AuditLog',
    Notification: 'Notification',
    EmailVerification: 'EmailVerification'
  };
  export type ModelName = (typeof ModelName)[keyof typeof ModelName]
  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }
  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "tenant" | "refreshToken" | "project" | "task" | "comment" | "invite" | "projectMember" | "auditLog" | "notification" | "emailVerification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Tenant: {
        payload: Prisma.$TenantPayload<ExtArgs>
        fields: Prisma.TenantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TenantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TenantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findFirst: {
            args: Prisma.TenantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TenantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findMany: {
            args: Prisma.TenantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          create: {
            args: Prisma.TenantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          createMany: {
            args: Prisma.TenantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TenantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          update: {
            args: Prisma.TenantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          deleteMany: {
            args: Prisma.TenantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TenantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TenantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          aggregate: {
            args: Prisma.TenantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTenant>
          }
          groupBy: {
            args: Prisma.TenantGroupByArgs<ExtArgs>
            result: $Utils.Optional<TenantGroupByOutputType>[]
          }
          count: {
            args: Prisma.TenantCountArgs<ExtArgs>
            result: $Utils.Optional<TenantCountAggregateOutputType> | number
          }
        }
      }
      RefreshToken: {
        payload: Prisma.$RefreshTokenPayload<ExtArgs>
        fields: Prisma.RefreshTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findFirst: {
            args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findMany: {
            args: Prisma.RefreshTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          create: {
            args: Prisma.RefreshTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          createMany: {
            args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RefreshTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          update: {
            args: Prisma.RefreshTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          deleteMany: {
            args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RefreshTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          aggregate: {
            args: Prisma.RefreshTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefreshToken>
          }
          groupBy: {
            args: Prisma.RefreshTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefreshTokenCountArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      Invite: {
        payload: Prisma.$InvitePayload<ExtArgs>
        fields: Prisma.InviteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InviteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InviteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitePayload>
          }
          findFirst: {
            args: Prisma.InviteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InviteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitePayload>
          }
          findMany: {
            args: Prisma.InviteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitePayload>[]
          }
          create: {
            args: Prisma.InviteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitePayload>
          }
          createMany: {
            args: Prisma.InviteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InviteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitePayload>
          }
          update: {
            args: Prisma.InviteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitePayload>
          }
          deleteMany: {
            args: Prisma.InviteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InviteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InviteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitePayload>
          }
          aggregate: {
            args: Prisma.InviteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvite>
          }
          groupBy: {
            args: Prisma.InviteGroupByArgs<ExtArgs>
            result: $Utils.Optional<InviteGroupByOutputType>[]
          }
          count: {
            args: Prisma.InviteCountArgs<ExtArgs>
            result: $Utils.Optional<InviteCountAggregateOutputType> | number
          }
        }
      }
      ProjectMember: {
        payload: Prisma.$ProjectMemberPayload<ExtArgs>
        fields: Prisma.ProjectMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>
          }
          findFirst: {
            args: Prisma.ProjectMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>
          }
          findMany: {
            args: Prisma.ProjectMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>[]
          }
          create: {
            args: Prisma.ProjectMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>
          }
          createMany: {
            args: Prisma.ProjectMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProjectMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>
          }
          update: {
            args: Prisma.ProjectMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>
          }
          deleteMany: {
            args: Prisma.ProjectMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>
          }
          aggregate: {
            args: Prisma.ProjectMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectMember>
          }
          groupBy: {
            args: Prisma.ProjectMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectMemberCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectMemberCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      EmailVerification: {
        payload: Prisma.$EmailVerificationPayload<ExtArgs>
        fields: Prisma.EmailVerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailVerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailVerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationPayload>
          }
          findFirst: {
            args: Prisma.EmailVerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailVerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationPayload>
          }
          findMany: {
            args: Prisma.EmailVerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationPayload>[]
          }
          create: {
            args: Prisma.EmailVerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationPayload>
          }
          createMany: {
            args: Prisma.EmailVerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EmailVerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationPayload>
          }
          update: {
            args: Prisma.EmailVerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationPayload>
          }
          deleteMany: {
            args: Prisma.EmailVerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailVerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EmailVerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationPayload>
          }
          aggregate: {
            args: Prisma.EmailVerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmailVerification>
          }
          groupBy: {
            args: Prisma.EmailVerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailVerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailVerificationCountArgs<ExtArgs>
            result: $Utils.Optional<EmailVerificationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    errorFormat?: ErrorFormat
    log?: (LogLevel | LogDefinition)[]
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    adapter?: runtime.SqlDriverAdapterFactory
    accelerateUrl?: string
    omit?: Prisma.GlobalOmitConfig
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    tenant?: TenantOmit
    refreshToken?: RefreshTokenOmit
    project?: ProjectOmit
    task?: TaskOmit
    comment?: CommentOmit
    invite?: InviteOmit
    projectMember?: ProjectMemberOmit
    auditLog?: AuditLogOmit
    notification?: NotificationOmit
    emailVerification?: EmailVerificationOmit
  }
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }
  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;
  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;
  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }
  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>
  export type Datasource = {
    url?: string
  }
  export type UserCountOutputType = {
    createdProjects: number
    assignedTasks: number
    createdTasks: number
    refreshTokens: number
    comments: number
    notifications: number
    auditLogs: number
    projectMemberships: number
    emailVerifications: number
  }
  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdProjects?: boolean | UserCountOutputTypeCountCreatedProjectsArgs
    assignedTasks?: boolean | UserCountOutputTypeCountAssignedTasksArgs
    createdTasks?: boolean | UserCountOutputTypeCountCreatedTasksArgs
    refreshTokens?: boolean | UserCountOutputTypeCountRefreshTokensArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
    auditLogs?: boolean | UserCountOutputTypeCountAuditLogsArgs
    projectMemberships?: boolean | UserCountOutputTypeCountProjectMembershipsArgs
    emailVerifications?: boolean | UserCountOutputTypeCountEmailVerificationsArgs
  }
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }
  export type UserCountOutputTypeCountCreatedProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }
  export type UserCountOutputTypeCountAssignedTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }
  export type UserCountOutputTypeCountCreatedTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }
  export type UserCountOutputTypeCountRefreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
  }
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }
  export type UserCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }
  export type UserCountOutputTypeCountProjectMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectMemberWhereInput
  }
  export type UserCountOutputTypeCountEmailVerificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailVerificationWhereInput
  }
  export type TenantCountOutputType = {
    users: number
    projects: number
    tasks: number
    invites: number
    comments: number
    notifications: number
    auditLogs: number
    projectMembers: number
  }
  export type TenantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | TenantCountOutputTypeCountUsersArgs
    projects?: boolean | TenantCountOutputTypeCountProjectsArgs
    tasks?: boolean | TenantCountOutputTypeCountTasksArgs
    invites?: boolean | TenantCountOutputTypeCountInvitesArgs
    comments?: boolean | TenantCountOutputTypeCountCommentsArgs
    notifications?: boolean | TenantCountOutputTypeCountNotificationsArgs
    auditLogs?: boolean | TenantCountOutputTypeCountAuditLogsArgs
    projectMembers?: boolean | TenantCountOutputTypeCountProjectMembersArgs
  }
  export type TenantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: TenantCountOutputTypeSelect<ExtArgs> | null
  }
  export type TenantCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }
  export type TenantCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }
  export type TenantCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }
  export type TenantCountOutputTypeCountInvitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InviteWhereInput
  }
  export type TenantCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }
  export type TenantCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }
  export type TenantCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }
  export type TenantCountOutputTypeCountProjectMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectMemberWhereInput
  }
  export type ProjectCountOutputType = {
    tasks: number
    comments: number
    members: number
  }
  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | ProjectCountOutputTypeCountTasksArgs
    comments?: boolean | ProjectCountOutputTypeCountCommentsArgs
    members?: boolean | ProjectCountOutputTypeCountMembersArgs
  }
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }
  export type ProjectCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }
  export type ProjectCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }
  export type ProjectCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectMemberWhereInput
  }
  export type CommentCountOutputType = {
    replies: number
  }
  export type CommentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    replies?: boolean | CommentCountOutputTypeCountRepliesArgs
  }
  export type CommentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: CommentCountOutputTypeSelect<ExtArgs> | null
  }
  export type CommentCountOutputTypeCountRepliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }
  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }
  export type UserMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    email: string | null
    passwordHash: string | null
    name: string | null
    role: $Enums.Role | null
    isActive: boolean | null
    isVerified: boolean | null
    totpSecret: string | null
    totpEnabled: boolean | null
    avatarUrl: string | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }
  export type UserMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    email: string | null
    passwordHash: string | null
    name: string | null
    role: $Enums.Role | null
    isActive: boolean | null
    isVerified: boolean | null
    totpSecret: string | null
    totpEnabled: boolean | null
    avatarUrl: string | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }
  export type UserCountAggregateOutputType = {
    id: number
    tenantId: number
    email: number
    passwordHash: number
    name: number
    role: number
    isActive: number
    isVerified: number
    totpSecret: number
    totpEnabled: number
    avatarUrl: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }
  export type UserMinAggregateInputType = {
    id?: true
    tenantId?: true
    email?: true
    passwordHash?: true
    name?: true
    role?: true
    isActive?: true
    isVerified?: true
    totpSecret?: true
    totpEnabled?: true
    avatarUrl?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }
  export type UserMaxAggregateInputType = {
    id?: true
    tenantId?: true
    email?: true
    passwordHash?: true
    name?: true
    role?: true
    isActive?: true
    isVerified?: true
    totpSecret?: true
    totpEnabled?: true
    avatarUrl?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }
  export type UserCountAggregateInputType = {
    id?: true
    tenantId?: true
    email?: true
    passwordHash?: true
    name?: true
    role?: true
    isActive?: true
    isVerified?: true
    totpSecret?: true
    totpEnabled?: true
    avatarUrl?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }
  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    _count?: true | UserCountAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }
  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }
  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }
  export type UserGroupByOutputType = {
    id: string
    tenantId: string
    email: string
    passwordHash: string
    name: string
    role: $Enums.Role
    isActive: boolean
    isVerified: boolean
    totpSecret: string | null
    totpEnabled: boolean
    avatarUrl: string | null
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }
  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >
  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    isActive?: boolean
    isVerified?: boolean
    totpSecret?: boolean
    totpEnabled?: boolean
    avatarUrl?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    createdProjects?: boolean | User$createdProjectsArgs<ExtArgs>
    assignedTasks?: boolean | User$assignedTasksArgs<ExtArgs>
    createdTasks?: boolean | User$createdTasksArgs<ExtArgs>
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    projectMemberships?: boolean | User$projectMembershipsArgs<ExtArgs>
    emailVerifications?: boolean | User$emailVerificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>
  export type UserSelectScalar = {
    id?: boolean
    tenantId?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    isActive?: boolean
    isVerified?: boolean
    totpSecret?: boolean
    totpEnabled?: boolean
    avatarUrl?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }
  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "email" | "passwordHash" | "name" | "role" | "isActive" | "isVerified" | "totpSecret" | "totpEnabled" | "avatarUrl" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    createdProjects?: boolean | User$createdProjectsArgs<ExtArgs>
    assignedTasks?: boolean | User$assignedTasksArgs<ExtArgs>
    createdTasks?: boolean | User$createdTasksArgs<ExtArgs>
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    projectMemberships?: boolean | User$projectMembershipsArgs<ExtArgs>
    emailVerifications?: boolean | User$emailVerificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      createdProjects: Prisma.$ProjectPayload<ExtArgs>[]
      assignedTasks: Prisma.$TaskPayload<ExtArgs>[]
      createdTasks: Prisma.$TaskPayload<ExtArgs>[]
      refreshTokens: Prisma.$RefreshTokenPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
      projectMemberships: Prisma.$ProjectMemberPayload<ExtArgs>[]
      emailVerifications: Prisma.$EmailVerificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      email: string
      passwordHash: string
      name: string
      role: $Enums.Role
      isActive: boolean
      isVerified: boolean
      totpSecret: string | null
      totpEnabled: boolean
      avatarUrl: string | null
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }
  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>
  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }
  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  readonly fields: UserFieldRefs;
  }
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    createdProjects<T extends User$createdProjectsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdProjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignedTasks<T extends User$assignedTasksArgs<ExtArgs> = {}>(args?: Subset<T, User$assignedTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdTasks<T extends User$createdTasksArgs<ExtArgs> = {}>(args?: Subset<T, User$createdTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    refreshTokens<T extends User$refreshTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$refreshTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auditLogs<T extends User$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projectMemberships<T extends User$projectMembershipsArgs<ExtArgs> = {}>(args?: Subset<T, User$projectMembershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    emailVerifications<T extends User$emailVerificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$emailVerificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailVerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly tenantId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly totpSecret: FieldRef<"User", 'String'>
    readonly totpEnabled: FieldRef<"User", 'Boolean'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: UserSelect<ExtArgs> | null
    omit?: UserOmit<ExtArgs> | null
    include?: UserInclude<ExtArgs> | null
    where: UserWhereUniqueInput
  }
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: UserSelect<ExtArgs> | null
    omit?: UserOmit<ExtArgs> | null
    include?: UserInclude<ExtArgs> | null
    where: UserWhereUniqueInput
  }
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: UserSelect<ExtArgs> | null
    omit?: UserOmit<ExtArgs> | null
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: UserSelect<ExtArgs> | null
    omit?: UserOmit<ExtArgs> | null
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: UserSelect<ExtArgs> | null
    omit?: UserOmit<ExtArgs> | null
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: UserSelect<ExtArgs> | null
    omit?: UserOmit<ExtArgs> | null
    include?: UserInclude<ExtArgs> | null
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: UserSelect<ExtArgs> | null
    omit?: UserOmit<ExtArgs> | null
    include?: UserInclude<ExtArgs> | null
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    where: UserWhereUniqueInput
  }
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    where?: UserWhereInput
    limit?: number
  }
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: UserSelect<ExtArgs> | null
    omit?: UserOmit<ExtArgs> | null
    include?: UserInclude<ExtArgs> | null
    where: UserWhereUniqueInput
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: UserSelect<ExtArgs> | null
    omit?: UserOmit<ExtArgs> | null
    include?: UserInclude<ExtArgs> | null
    where: UserWhereUniqueInput
  }
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    limit?: number
  }
  export type User$createdProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: ProjectSelect<ExtArgs> | null
    omit?: ProjectOmit<ExtArgs> | null
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }
  export type User$assignedTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: TaskSelect<ExtArgs> | null
    omit?: TaskOmit<ExtArgs> | null
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }
  export type User$createdTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: TaskSelect<ExtArgs> | null
    omit?: TaskOmit<ExtArgs> | null
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }
  export type User$refreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: RefreshTokenSelect<ExtArgs> | null
    omit?: RefreshTokenOmit<ExtArgs> | null
    include?: RefreshTokenInclude<ExtArgs> | null
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    cursor?: RefreshTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: CommentSelect<ExtArgs> | null
    omit?: CommentOmit<ExtArgs> | null
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: NotificationSelect<ExtArgs> | null
    omit?: NotificationOmit<ExtArgs> | null
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }
  export type User$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: AuditLogSelect<ExtArgs> | null
    omit?: AuditLogOmit<ExtArgs> | null
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }
  export type User$projectMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: ProjectMemberSelect<ExtArgs> | null
    omit?: ProjectMemberOmit<ExtArgs> | null
    include?: ProjectMemberInclude<ExtArgs> | null
    where?: ProjectMemberWhereInput
    orderBy?: ProjectMemberOrderByWithRelationInput | ProjectMemberOrderByWithRelationInput[]
    cursor?: ProjectMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectMemberScalarFieldEnum | ProjectMemberScalarFieldEnum[]
  }
  export type User$emailVerificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: EmailVerificationSelect<ExtArgs> | null
    omit?: EmailVerificationOmit<ExtArgs> | null
    include?: EmailVerificationInclude<ExtArgs> | null
    where?: EmailVerificationWhereInput
    orderBy?: EmailVerificationOrderByWithRelationInput | EmailVerificationOrderByWithRelationInput[]
    cursor?: EmailVerificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmailVerificationScalarFieldEnum | EmailVerificationScalarFieldEnum[]
  }
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: UserSelect<ExtArgs> | null
    omit?: UserOmit<ExtArgs> | null
    include?: UserInclude<ExtArgs> | null
  }
  export type AggregateTenant = {
    _count: TenantCountAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }
  export type TenantMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }
  export type TenantMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }
  export type TenantCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    createdAt: number
    updatedAt: number
    _all: number
  }
  export type TenantMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
  }
  export type TenantMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
  }
  export type TenantCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }
  export type TenantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantWhereInput
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    cursor?: TenantWhereUniqueInput
    take?: number
    skip?: number
    _count?: true | TenantCountAggregateInputType
    _min?: TenantMinAggregateInputType
    _max?: TenantMaxAggregateInputType
  }
  export type GetTenantAggregateType<T extends TenantAggregateArgs> = {
        [P in keyof T & keyof AggregateTenant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTenant[P]>
      : GetScalarType<T[P], AggregateTenant[P]>
  }
  export type TenantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantWhereInput
    orderBy?: TenantOrderByWithAggregationInput | TenantOrderByWithAggregationInput[]
    by: TenantScalarFieldEnum[] | TenantScalarFieldEnum
    having?: TenantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TenantCountAggregateInputType | true
    _min?: TenantMinAggregateInputType
    _max?: TenantMaxAggregateInputType
  }
  export type TenantGroupByOutputType = {
    id: string
    name: string
    slug: string
    createdAt: Date
    updatedAt: Date
    _count: TenantCountAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }
  type GetTenantGroupByPayload<T extends TenantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TenantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TenantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TenantGroupByOutputType[P]>
            : GetScalarType<T[P], TenantGroupByOutputType[P]>
        }
      >
    >
  export type TenantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Tenant$usersArgs<ExtArgs>
    projects?: boolean | Tenant$projectsArgs<ExtArgs>
    tasks?: boolean | Tenant$tasksArgs<ExtArgs>
    invites?: boolean | Tenant$invitesArgs<ExtArgs>
    comments?: boolean | Tenant$commentsArgs<ExtArgs>
    notifications?: boolean | Tenant$notificationsArgs<ExtArgs>
    auditLogs?: boolean | Tenant$auditLogsArgs<ExtArgs>
    projectMembers?: boolean | Tenant$projectMembersArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenant"]>
  export type TenantSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }
  export type TenantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "createdAt" | "updatedAt", ExtArgs["result"]["tenant"]>
  export type TenantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Tenant$usersArgs<ExtArgs>
    projects?: boolean | Tenant$projectsArgs<ExtArgs>
    tasks?: boolean | Tenant$tasksArgs<ExtArgs>
    invites?: boolean | Tenant$invitesArgs<ExtArgs>
    comments?: boolean | Tenant$commentsArgs<ExtArgs>
    notifications?: boolean | Tenant$notificationsArgs<ExtArgs>
    auditLogs?: boolean | Tenant$auditLogsArgs<ExtArgs>
    projectMembers?: boolean | Tenant$projectMembersArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type $TenantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tenant"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      projects: Prisma.$ProjectPayload<ExtArgs>[]
      tasks: Prisma.$TaskPayload<ExtArgs>[]
      invites: Prisma.$InvitePayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
      projectMembers: Prisma.$ProjectMemberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tenant"]>
    composites: {}
  }
  type TenantGetPayload<S extends boolean | null | undefined | TenantDefaultArgs> = $Result.GetResult<Prisma.$TenantPayload, S>
  type TenantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TenantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TenantCountAggregateInputType | true
    }
  export interface TenantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tenant'], meta: { name: 'Tenant' } }
    findUnique<T extends TenantFindUniqueArgs>(args: SelectSubset<T, TenantFindUniqueArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    findUniqueOrThrow<T extends TenantFindUniqueOrThrowArgs>(args: SelectSubset<T, TenantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    findFirst<T extends TenantFindFirstArgs>(args?: SelectSubset<T, TenantFindFirstArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    findFirstOrThrow<T extends TenantFindFirstOrThrowArgs>(args?: SelectSubset<T, TenantFindFirstOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    findMany<T extends TenantFindManyArgs>(args?: SelectSubset<T, TenantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>
    create<T extends TenantCreateArgs>(args: SelectSubset<T, TenantCreateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    createMany<T extends TenantCreateManyArgs>(args?: SelectSubset<T, TenantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>
    delete<T extends TenantDeleteArgs>(args: SelectSubset<T, TenantDeleteArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    update<T extends TenantUpdateArgs>(args: SelectSubset<T, TenantUpdateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    deleteMany<T extends TenantDeleteManyArgs>(args?: SelectSubset<T, TenantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>
    updateMany<T extends TenantUpdateManyArgs>(args: SelectSubset<T, TenantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>
    upsert<T extends TenantUpsertArgs>(args: SelectSubset<T, TenantUpsertArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    count<T extends TenantCountArgs>(
      args?: Subset<T, TenantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TenantCountAggregateOutputType>
        : number
    >
    aggregate<T extends TenantAggregateArgs>(args: Subset<T, TenantAggregateArgs>): Prisma.PrismaPromise<GetTenantAggregateType<T>>
    groupBy<
      T extends TenantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TenantGroupByArgs['orderBy'] }
        : { orderBy?: TenantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TenantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  readonly fields: TenantFieldRefs;
  }
  export interface Prisma__TenantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Tenant$usersArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projects<T extends Tenant$projectsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tasks<T extends Tenant$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invites<T extends Tenant$invitesArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$invitesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends Tenant$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends Tenant$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auditLogs<T extends Tenant$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projectMembers<T extends Tenant$projectMembersArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$projectMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }
  interface TenantFieldRefs {
    readonly id: FieldRef<"Tenant", 'String'>
    readonly name: FieldRef<"Tenant", 'String'>
    readonly slug: FieldRef<"Tenant", 'String'>
    readonly createdAt: FieldRef<"Tenant", 'DateTime'>
    readonly updatedAt: FieldRef<"Tenant", 'DateTime'>
  }
  export type TenantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: TenantSelect<ExtArgs> | null
    omit?: TenantOmit<ExtArgs> | null
    include?: TenantInclude<ExtArgs> | null
    where: TenantWhereUniqueInput
  }
  export type TenantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: TenantSelect<ExtArgs> | null
    omit?: TenantOmit<ExtArgs> | null
    include?: TenantInclude<ExtArgs> | null
    where: TenantWhereUniqueInput
  }
  export type TenantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: TenantSelect<ExtArgs> | null
    omit?: TenantOmit<ExtArgs> | null
    include?: TenantInclude<ExtArgs> | null
    where?: TenantWhereInput
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    cursor?: TenantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }
  export type TenantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: TenantSelect<ExtArgs> | null
    omit?: TenantOmit<ExtArgs> | null
    include?: TenantInclude<ExtArgs> | null
    where?: TenantWhereInput
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    cursor?: TenantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }
  export type TenantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: TenantSelect<ExtArgs> | null
    omit?: TenantOmit<ExtArgs> | null
    include?: TenantInclude<ExtArgs> | null
    where?: TenantWhereInput
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    cursor?: TenantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }
  export type TenantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: TenantSelect<ExtArgs> | null
    omit?: TenantOmit<ExtArgs> | null
    include?: TenantInclude<ExtArgs> | null
    data: XOR<TenantCreateInput, TenantUncheckedCreateInput>
  }
  export type TenantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
  }
  export type TenantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: TenantSelect<ExtArgs> | null
    omit?: TenantOmit<ExtArgs> | null
    include?: TenantInclude<ExtArgs> | null
    data: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
    where: TenantWhereUniqueInput
  }
  export type TenantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    where?: TenantWhereInput
    limit?: number
  }
  export type TenantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: TenantSelect<ExtArgs> | null
    omit?: TenantOmit<ExtArgs> | null
    include?: TenantInclude<ExtArgs> | null
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateInput, TenantUncheckedCreateInput>
    update: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
  }
  export type TenantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: TenantSelect<ExtArgs> | null
    omit?: TenantOmit<ExtArgs> | null
    include?: TenantInclude<ExtArgs> | null
    where: TenantWhereUniqueInput
  }
  export type TenantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantWhereInput
    limit?: number
  }
  export type Tenant$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: UserSelect<ExtArgs> | null
    omit?: UserOmit<ExtArgs> | null
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }
  export type Tenant$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: ProjectSelect<ExtArgs> | null
    omit?: ProjectOmit<ExtArgs> | null
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }
  export type Tenant$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: TaskSelect<ExtArgs> | null
    omit?: TaskOmit<ExtArgs> | null
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }
  export type Tenant$invitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: InviteSelect<ExtArgs> | null
    omit?: InviteOmit<ExtArgs> | null
    include?: InviteInclude<ExtArgs> | null
    where?: InviteWhereInput
    orderBy?: InviteOrderByWithRelationInput | InviteOrderByWithRelationInput[]
    cursor?: InviteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InviteScalarFieldEnum | InviteScalarFieldEnum[]
  }
  export type Tenant$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: CommentSelect<ExtArgs> | null
    omit?: CommentOmit<ExtArgs> | null
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }
  export type Tenant$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: NotificationSelect<ExtArgs> | null
    omit?: NotificationOmit<ExtArgs> | null
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }
  export type Tenant$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: AuditLogSelect<ExtArgs> | null
    omit?: AuditLogOmit<ExtArgs> | null
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }
  export type Tenant$projectMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: ProjectMemberSelect<ExtArgs> | null
    omit?: ProjectMemberOmit<ExtArgs> | null
    include?: ProjectMemberInclude<ExtArgs> | null
    where?: ProjectMemberWhereInput
    orderBy?: ProjectMemberOrderByWithRelationInput | ProjectMemberOrderByWithRelationInput[]
    cursor?: ProjectMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectMemberScalarFieldEnum | ProjectMemberScalarFieldEnum[]
  }
  export type TenantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: TenantSelect<ExtArgs> | null
    omit?: TenantOmit<ExtArgs> | null
    include?: TenantInclude<ExtArgs> | null
  }
  export type AggregateRefreshToken = {
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }
  export type RefreshTokenMinAggregateOutputType = {
    id: string | null
    token: string | null
    expiresAt: Date | null
    userId: string | null
    createdAt: Date | null
  }
  export type RefreshTokenMaxAggregateOutputType = {
    id: string | null
    token: string | null
    expiresAt: Date | null
    userId: string | null
    createdAt: Date | null
  }
  export type RefreshTokenCountAggregateOutputType = {
    id: number
    token: number
    expiresAt: number
    userId: number
    createdAt: number
    _all: number
  }
  export type RefreshTokenMinAggregateInputType = {
    id?: true
    token?: true
    expiresAt?: true
    userId?: true
    createdAt?: true
  }
  export type RefreshTokenMaxAggregateInputType = {
    id?: true
    token?: true
    expiresAt?: true
    userId?: true
    createdAt?: true
  }
  export type RefreshTokenCountAggregateInputType = {
    id?: true
    token?: true
    expiresAt?: true
    userId?: true
    createdAt?: true
    _all?: true
  }
  export type RefreshTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    cursor?: RefreshTokenWhereUniqueInput
    take?: number
    skip?: number
    _count?: true | RefreshTokenCountAggregateInputType
    _min?: RefreshTokenMinAggregateInputType
    _max?: RefreshTokenMaxAggregateInputType
  }
  export type GetRefreshTokenAggregateType<T extends RefreshTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshToken[P]>
      : GetScalarType<T[P], AggregateRefreshToken[P]>
  }
  export type RefreshTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithAggregationInput | RefreshTokenOrderByWithAggregationInput[]
    by: RefreshTokenScalarFieldEnum[] | RefreshTokenScalarFieldEnum
    having?: RefreshTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshTokenCountAggregateInputType | true
    _min?: RefreshTokenMinAggregateInputType
    _max?: RefreshTokenMaxAggregateInputType
  }
  export type RefreshTokenGroupByOutputType = {
    id: string
    token: string
    expiresAt: Date
    userId: string
    createdAt: Date
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }
  type GetRefreshTokenGroupByPayload<T extends RefreshTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefreshTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
        }
      >
    >
  export type RefreshTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    expiresAt?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>
  export type RefreshTokenSelectScalar = {
    id?: boolean
    token?: boolean
    expiresAt?: boolean
    userId?: boolean
    createdAt?: boolean
  }
  export type RefreshTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "expiresAt" | "userId" | "createdAt", ExtArgs["result"]["refreshToken"]>
  export type RefreshTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type $RefreshTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefreshToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      expiresAt: Date
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["refreshToken"]>
    composites: {}
  }
  type RefreshTokenGetPayload<S extends boolean | null | undefined | RefreshTokenDefaultArgs> = $Result.GetResult<Prisma.$RefreshTokenPayload, S>
  type RefreshTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RefreshTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefreshTokenCountAggregateInputType | true
    }
  export interface RefreshTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefreshToken'], meta: { name: 'RefreshToken' } }
    findUnique<T extends RefreshTokenFindUniqueArgs>(args: SelectSubset<T, RefreshTokenFindUniqueArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    findUniqueOrThrow<T extends RefreshTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, RefreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    findFirst<T extends RefreshTokenFindFirstArgs>(args?: SelectSubset<T, RefreshTokenFindFirstArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    findFirstOrThrow<T extends RefreshTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, RefreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    findMany<T extends RefreshTokenFindManyArgs>(args?: SelectSubset<T, RefreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>
    create<T extends RefreshTokenCreateArgs>(args: SelectSubset<T, RefreshTokenCreateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    createMany<T extends RefreshTokenCreateManyArgs>(args?: SelectSubset<T, RefreshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>
    delete<T extends RefreshTokenDeleteArgs>(args: SelectSubset<T, RefreshTokenDeleteArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    update<T extends RefreshTokenUpdateArgs>(args: SelectSubset<T, RefreshTokenUpdateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    deleteMany<T extends RefreshTokenDeleteManyArgs>(args?: SelectSubset<T, RefreshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>
    updateMany<T extends RefreshTokenUpdateManyArgs>(args: SelectSubset<T, RefreshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>
    upsert<T extends RefreshTokenUpsertArgs>(args: SelectSubset<T, RefreshTokenUpsertArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    count<T extends RefreshTokenCountArgs>(
      args?: Subset<T, RefreshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshTokenCountAggregateOutputType>
        : number
    >
    aggregate<T extends RefreshTokenAggregateArgs>(args: Subset<T, RefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetRefreshTokenAggregateType<T>>
    groupBy<
      T extends RefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: RefreshTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  readonly fields: RefreshTokenFieldRefs;
  }
  export interface Prisma__RefreshTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }
  interface RefreshTokenFieldRefs {
    readonly id: FieldRef<"RefreshToken", 'String'>
    readonly token: FieldRef<"RefreshToken", 'String'>
    readonly expiresAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly userId: FieldRef<"RefreshToken", 'String'>
    readonly createdAt: FieldRef<"RefreshToken", 'DateTime'>
  }
  export type RefreshTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: RefreshTokenSelect<ExtArgs> | null
    omit?: RefreshTokenOmit<ExtArgs> | null
    include?: RefreshTokenInclude<ExtArgs> | null
    where: RefreshTokenWhereUniqueInput
  }
  export type RefreshTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: RefreshTokenSelect<ExtArgs> | null
    omit?: RefreshTokenOmit<ExtArgs> | null
    include?: RefreshTokenInclude<ExtArgs> | null
    where: RefreshTokenWhereUniqueInput
  }
  export type RefreshTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: RefreshTokenSelect<ExtArgs> | null
    omit?: RefreshTokenOmit<ExtArgs> | null
    include?: RefreshTokenInclude<ExtArgs> | null
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    cursor?: RefreshTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }
  export type RefreshTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: RefreshTokenSelect<ExtArgs> | null
    omit?: RefreshTokenOmit<ExtArgs> | null
    include?: RefreshTokenInclude<ExtArgs> | null
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    cursor?: RefreshTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }
  export type RefreshTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: RefreshTokenSelect<ExtArgs> | null
    omit?: RefreshTokenOmit<ExtArgs> | null
    include?: RefreshTokenInclude<ExtArgs> | null
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    cursor?: RefreshTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }
  export type RefreshTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: RefreshTokenSelect<ExtArgs> | null
    omit?: RefreshTokenOmit<ExtArgs> | null
    include?: RefreshTokenInclude<ExtArgs> | null
    data: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
  }
  export type RefreshTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
  }
  export type RefreshTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: RefreshTokenSelect<ExtArgs> | null
    omit?: RefreshTokenOmit<ExtArgs> | null
    include?: RefreshTokenInclude<ExtArgs> | null
    data: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
    where: RefreshTokenWhereUniqueInput
  }
  export type RefreshTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    where?: RefreshTokenWhereInput
    limit?: number
  }
  export type RefreshTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: RefreshTokenSelect<ExtArgs> | null
    omit?: RefreshTokenOmit<ExtArgs> | null
    include?: RefreshTokenInclude<ExtArgs> | null
    where: RefreshTokenWhereUniqueInput
    create: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
    update: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
  }
  export type RefreshTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: RefreshTokenSelect<ExtArgs> | null
    omit?: RefreshTokenOmit<ExtArgs> | null
    include?: RefreshTokenInclude<ExtArgs> | null
    where: RefreshTokenWhereUniqueInput
  }
  export type RefreshTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
    limit?: number
  }
  export type RefreshTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: RefreshTokenSelect<ExtArgs> | null
    omit?: RefreshTokenOmit<ExtArgs> | null
    include?: RefreshTokenInclude<ExtArgs> | null
  }
  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }
  export type ProjectMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    name: string | null
    description: string | null
    status: $Enums.ProjectStatus | null
    startDate: Date | null
    endDate: Date | null
    createdBy: string | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }
  export type ProjectMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    name: string | null
    description: string | null
    status: $Enums.ProjectStatus | null
    startDate: Date | null
    endDate: Date | null
    createdBy: string | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }
  export type ProjectCountAggregateOutputType = {
    id: number
    tenantId: number
    name: number
    description: number
    status: number
    startDate: number
    endDate: number
    createdBy: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }
  export type ProjectMinAggregateInputType = {
    id?: true
    tenantId?: true
    name?: true
    description?: true
    status?: true
    startDate?: true
    endDate?: true
    createdBy?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }
  export type ProjectMaxAggregateInputType = {
    id?: true
    tenantId?: true
    name?: true
    description?: true
    status?: true
    startDate?: true
    endDate?: true
    createdBy?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }
  export type ProjectCountAggregateInputType = {
    id?: true
    tenantId?: true
    name?: true
    description?: true
    status?: true
    startDate?: true
    endDate?: true
    createdBy?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }
  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    _count?: true | ProjectCountAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }
  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }
  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }
  export type ProjectGroupByOutputType = {
    id: string
    tenantId: string
    name: string
    description: string | null
    status: $Enums.ProjectStatus
    startDate: Date | null
    endDate: Date | null
    createdBy: string
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }
  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >
  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    createdBy?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    tasks?: boolean | Project$tasksArgs<ExtArgs>
    comments?: boolean | Project$commentsArgs<ExtArgs>
    members?: boolean | Project$membersArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>
  export type ProjectSelectScalar = {
    id?: boolean
    tenantId?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    createdBy?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }
  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "name" | "description" | "status" | "startDate" | "endDate" | "createdBy" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    tasks?: boolean | Project$tasksArgs<ExtArgs>
    comments?: boolean | Project$commentsArgs<ExtArgs>
    members?: boolean | Project$membersArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      creator: Prisma.$UserPayload<ExtArgs>
      tasks: Prisma.$TaskPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      members: Prisma.$ProjectMemberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      name: string
      description: string | null
      status: $Enums.ProjectStatus
      startDate: Date | null
      endDate: Date | null
      createdBy: string
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }
  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>
  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }
  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  readonly fields: ProjectFieldRefs;
  }
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tasks<T extends Project$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Project$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends Project$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Project$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    members<T extends Project$membersArgs<ExtArgs> = {}>(args?: Subset<T, Project$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly tenantId: FieldRef<"Project", 'String'>
    readonly name: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly status: FieldRef<"Project", 'ProjectStatus'>
    readonly startDate: FieldRef<"Project", 'DateTime'>
    readonly endDate: FieldRef<"Project", 'DateTime'>
    readonly createdBy: FieldRef<"Project", 'String'>
    readonly deletedAt: FieldRef<"Project", 'DateTime'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
  }
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: ProjectSelect<ExtArgs> | null
    omit?: ProjectOmit<ExtArgs> | null
    include?: ProjectInclude<ExtArgs> | null
    where: ProjectWhereUniqueInput
  }
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: ProjectSelect<ExtArgs> | null
    omit?: ProjectOmit<ExtArgs> | null
    include?: ProjectInclude<ExtArgs> | null
    where: ProjectWhereUniqueInput
  }
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: ProjectSelect<ExtArgs> | null
    omit?: ProjectOmit<ExtArgs> | null
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: ProjectSelect<ExtArgs> | null
    omit?: ProjectOmit<ExtArgs> | null
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: ProjectSelect<ExtArgs> | null
    omit?: ProjectOmit<ExtArgs> | null
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: ProjectSelect<ExtArgs> | null
    omit?: ProjectOmit<ExtArgs> | null
    include?: ProjectInclude<ExtArgs> | null
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: ProjectSelect<ExtArgs> | null
    omit?: ProjectOmit<ExtArgs> | null
    include?: ProjectInclude<ExtArgs> | null
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    where: ProjectWhereUniqueInput
  }
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    where?: ProjectWhereInput
    limit?: number
  }
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: ProjectSelect<ExtArgs> | null
    omit?: ProjectOmit<ExtArgs> | null
    include?: ProjectInclude<ExtArgs> | null
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: ProjectSelect<ExtArgs> | null
    omit?: ProjectOmit<ExtArgs> | null
    include?: ProjectInclude<ExtArgs> | null
    where: ProjectWhereUniqueInput
  }
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    limit?: number
  }
  export type Project$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: TaskSelect<ExtArgs> | null
    omit?: TaskOmit<ExtArgs> | null
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }
  export type Project$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: CommentSelect<ExtArgs> | null
    omit?: CommentOmit<ExtArgs> | null
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }
  export type Project$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: ProjectMemberSelect<ExtArgs> | null
    omit?: ProjectMemberOmit<ExtArgs> | null
    include?: ProjectMemberInclude<ExtArgs> | null
    where?: ProjectMemberWhereInput
    orderBy?: ProjectMemberOrderByWithRelationInput | ProjectMemberOrderByWithRelationInput[]
    cursor?: ProjectMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectMemberScalarFieldEnum | ProjectMemberScalarFieldEnum[]
  }
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: ProjectSelect<ExtArgs> | null
    omit?: ProjectOmit<ExtArgs> | null
    include?: ProjectInclude<ExtArgs> | null
  }
  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }
  export type TaskMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    projectId: string | null
    title: string | null
    description: string | null
    status: $Enums.TaskStatus | null
    priority: $Enums.TaskPriority | null
    assigneeId: string | null
    dueDate: Date | null
    createdBy: string | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }
  export type TaskMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    projectId: string | null
    title: string | null
    description: string | null
    status: $Enums.TaskStatus | null
    priority: $Enums.TaskPriority | null
    assigneeId: string | null
    dueDate: Date | null
    createdBy: string | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }
  export type TaskCountAggregateOutputType = {
    id: number
    tenantId: number
    projectId: number
    title: number
    description: number
    status: number
    priority: number
    assigneeId: number
    dueDate: number
    createdBy: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }
  export type TaskMinAggregateInputType = {
    id?: true
    tenantId?: true
    projectId?: true
    title?: true
    description?: true
    status?: true
    priority?: true
    assigneeId?: true
    dueDate?: true
    createdBy?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }
  export type TaskMaxAggregateInputType = {
    id?: true
    tenantId?: true
    projectId?: true
    title?: true
    description?: true
    status?: true
    priority?: true
    assigneeId?: true
    dueDate?: true
    createdBy?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }
  export type TaskCountAggregateInputType = {
    id?: true
    tenantId?: true
    projectId?: true
    title?: true
    description?: true
    status?: true
    priority?: true
    assigneeId?: true
    dueDate?: true
    createdBy?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }
  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    _count?: true | TaskCountAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }
  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }
  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }
  export type TaskGroupByOutputType = {
    id: string
    tenantId: string
    projectId: string
    title: string
    description: string | null
    status: $Enums.TaskStatus
    priority: $Enums.TaskPriority
    assigneeId: string | null
    dueDate: Date | null
    createdBy: string
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: TaskCountAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }
  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >
  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    projectId?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    assigneeId?: boolean
    dueDate?: boolean
    createdBy?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    assignee?: boolean | Task$assigneeArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>
  export type TaskSelectScalar = {
    id?: boolean
    tenantId?: boolean
    projectId?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    assigneeId?: boolean
    dueDate?: boolean
    createdBy?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }
  export type TaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "projectId" | "title" | "description" | "status" | "priority" | "assigneeId" | "dueDate" | "createdBy" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["task"]>
  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    assignee?: boolean | Task$assigneeArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      project: Prisma.$ProjectPayload<ExtArgs>
      assignee: Prisma.$UserPayload<ExtArgs> | null
      creator: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      projectId: string
      title: string
      description: string | null
      status: $Enums.TaskStatus
      priority: $Enums.TaskPriority
      assigneeId: string | null
      dueDate: Date | null
      createdBy: string
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["task"]>
    composites: {}
  }
  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>
  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }
  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>
    groupBy<
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  readonly fields: TaskFieldRefs;
  }
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assignee<T extends Task$assigneeArgs<ExtArgs> = {}>(args?: Subset<T, Task$assigneeArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'String'>
    readonly tenantId: FieldRef<"Task", 'String'>
    readonly projectId: FieldRef<"Task", 'String'>
    readonly title: FieldRef<"Task", 'String'>
    readonly description: FieldRef<"Task", 'String'>
    readonly status: FieldRef<"Task", 'TaskStatus'>
    readonly priority: FieldRef<"Task", 'TaskPriority'>
    readonly assigneeId: FieldRef<"Task", 'String'>
    readonly dueDate: FieldRef<"Task", 'DateTime'>
    readonly createdBy: FieldRef<"Task", 'String'>
    readonly deletedAt: FieldRef<"Task", 'DateTime'>
    readonly createdAt: FieldRef<"Task", 'DateTime'>
    readonly updatedAt: FieldRef<"Task", 'DateTime'>
  }
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: TaskSelect<ExtArgs> | null
    omit?: TaskOmit<ExtArgs> | null
    include?: TaskInclude<ExtArgs> | null
    where: TaskWhereUniqueInput
  }
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: TaskSelect<ExtArgs> | null
    omit?: TaskOmit<ExtArgs> | null
    include?: TaskInclude<ExtArgs> | null
    where: TaskWhereUniqueInput
  }
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: TaskSelect<ExtArgs> | null
    omit?: TaskOmit<ExtArgs> | null
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: TaskSelect<ExtArgs> | null
    omit?: TaskOmit<ExtArgs> | null
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: TaskSelect<ExtArgs> | null
    omit?: TaskOmit<ExtArgs> | null
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: TaskSelect<ExtArgs> | null
    omit?: TaskOmit<ExtArgs> | null
    include?: TaskInclude<ExtArgs> | null
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: TaskSelect<ExtArgs> | null
    omit?: TaskOmit<ExtArgs> | null
    include?: TaskInclude<ExtArgs> | null
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    where: TaskWhereUniqueInput
  }
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    where?: TaskWhereInput
    limit?: number
  }
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: TaskSelect<ExtArgs> | null
    omit?: TaskOmit<ExtArgs> | null
    include?: TaskInclude<ExtArgs> | null
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: TaskSelect<ExtArgs> | null
    omit?: TaskOmit<ExtArgs> | null
    include?: TaskInclude<ExtArgs> | null
    where: TaskWhereUniqueInput
  }
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    limit?: number
  }
  export type Task$assigneeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: UserSelect<ExtArgs> | null
    omit?: UserOmit<ExtArgs> | null
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: TaskSelect<ExtArgs> | null
    omit?: TaskOmit<ExtArgs> | null
    include?: TaskInclude<ExtArgs> | null
  }
  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }
  export type CommentMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    projectId: string | null
    userId: string | null
    parentId: string | null
    text: string | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }
  export type CommentMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    projectId: string | null
    userId: string | null
    parentId: string | null
    text: string | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }
  export type CommentCountAggregateOutputType = {
    id: number
    tenantId: number
    projectId: number
    userId: number
    parentId: number
    text: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }
  export type CommentMinAggregateInputType = {
    id?: true
    tenantId?: true
    projectId?: true
    userId?: true
    parentId?: true
    text?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }
  export type CommentMaxAggregateInputType = {
    id?: true
    tenantId?: true
    projectId?: true
    userId?: true
    parentId?: true
    text?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }
  export type CommentCountAggregateInputType = {
    id?: true
    tenantId?: true
    projectId?: true
    userId?: true
    parentId?: true
    text?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }
  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    _count?: true | CommentCountAggregateInputType
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }
  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }
  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }
  export type CommentGroupByOutputType = {
    id: string
    tenantId: string
    projectId: string
    userId: string
    parentId: string | null
    text: string
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }
  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >
  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    projectId?: boolean
    userId?: boolean
    parentId?: boolean
    text?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
    replies?: boolean | Comment$repliesArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>
  export type CommentSelectScalar = {
    id?: boolean
    tenantId?: boolean
    projectId?: boolean
    userId?: boolean
    parentId?: boolean
    text?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }
  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "projectId" | "userId" | "parentId" | "text" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
    replies?: boolean | Comment$repliesArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      project: Prisma.$ProjectPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      parent: Prisma.$CommentPayload<ExtArgs> | null
      replies: Prisma.$CommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      projectId: string
      userId: string
      parentId: string | null
      text: string
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }
  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>
  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }
  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  readonly fields: CommentFieldRefs;
  }
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parent<T extends Comment$parentArgs<ExtArgs> = {}>(args?: Subset<T, Comment$parentArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    replies<T extends Comment$repliesArgs<ExtArgs> = {}>(args?: Subset<T, Comment$repliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'String'>
    readonly tenantId: FieldRef<"Comment", 'String'>
    readonly projectId: FieldRef<"Comment", 'String'>
    readonly userId: FieldRef<"Comment", 'String'>
    readonly parentId: FieldRef<"Comment", 'String'>
    readonly text: FieldRef<"Comment", 'String'>
    readonly deletedAt: FieldRef<"Comment", 'DateTime'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
    readonly updatedAt: FieldRef<"Comment", 'DateTime'>
  }
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: CommentSelect<ExtArgs> | null
    omit?: CommentOmit<ExtArgs> | null
    include?: CommentInclude<ExtArgs> | null
    where: CommentWhereUniqueInput
  }
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: CommentSelect<ExtArgs> | null
    omit?: CommentOmit<ExtArgs> | null
    include?: CommentInclude<ExtArgs> | null
    where: CommentWhereUniqueInput
  }
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: CommentSelect<ExtArgs> | null
    omit?: CommentOmit<ExtArgs> | null
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: CommentSelect<ExtArgs> | null
    omit?: CommentOmit<ExtArgs> | null
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: CommentSelect<ExtArgs> | null
    omit?: CommentOmit<ExtArgs> | null
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: CommentSelect<ExtArgs> | null
    omit?: CommentOmit<ExtArgs> | null
    include?: CommentInclude<ExtArgs> | null
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: CommentSelect<ExtArgs> | null
    omit?: CommentOmit<ExtArgs> | null
    include?: CommentInclude<ExtArgs> | null
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    where: CommentWhereUniqueInput
  }
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    where?: CommentWhereInput
    limit?: number
  }
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: CommentSelect<ExtArgs> | null
    omit?: CommentOmit<ExtArgs> | null
    include?: CommentInclude<ExtArgs> | null
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: CommentSelect<ExtArgs> | null
    omit?: CommentOmit<ExtArgs> | null
    include?: CommentInclude<ExtArgs> | null
    where: CommentWhereUniqueInput
  }
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    limit?: number
  }
  export type Comment$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: CommentSelect<ExtArgs> | null
    omit?: CommentOmit<ExtArgs> | null
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
  }
  export type Comment$repliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: CommentSelect<ExtArgs> | null
    omit?: CommentOmit<ExtArgs> | null
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: CommentSelect<ExtArgs> | null
    omit?: CommentOmit<ExtArgs> | null
    include?: CommentInclude<ExtArgs> | null
  }
  export type AggregateInvite = {
    _count: InviteCountAggregateOutputType | null
    _min: InviteMinAggregateOutputType | null
    _max: InviteMaxAggregateOutputType | null
  }
  export type InviteMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    email: string | null
    role: $Enums.Role | null
    token: string | null
    status: $Enums.InviteStatus | null
    expiresAt: Date | null
    createdAt: Date | null
  }
  export type InviteMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    email: string | null
    role: $Enums.Role | null
    token: string | null
    status: $Enums.InviteStatus | null
    expiresAt: Date | null
    createdAt: Date | null
  }
  export type InviteCountAggregateOutputType = {
    id: number
    tenantId: number
    email: number
    role: number
    token: number
    status: number
    expiresAt: number
    createdAt: number
    _all: number
  }
  export type InviteMinAggregateInputType = {
    id?: true
    tenantId?: true
    email?: true
    role?: true
    token?: true
    status?: true
    expiresAt?: true
    createdAt?: true
  }
  export type InviteMaxAggregateInputType = {
    id?: true
    tenantId?: true
    email?: true
    role?: true
    token?: true
    status?: true
    expiresAt?: true
    createdAt?: true
  }
  export type InviteCountAggregateInputType = {
    id?: true
    tenantId?: true
    email?: true
    role?: true
    token?: true
    status?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }
  export type InviteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InviteWhereInput
    orderBy?: InviteOrderByWithRelationInput | InviteOrderByWithRelationInput[]
    cursor?: InviteWhereUniqueInput
    take?: number
    skip?: number
    _count?: true | InviteCountAggregateInputType
    _min?: InviteMinAggregateInputType
    _max?: InviteMaxAggregateInputType
  }
  export type GetInviteAggregateType<T extends InviteAggregateArgs> = {
        [P in keyof T & keyof AggregateInvite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvite[P]>
      : GetScalarType<T[P], AggregateInvite[P]>
  }
  export type InviteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InviteWhereInput
    orderBy?: InviteOrderByWithAggregationInput | InviteOrderByWithAggregationInput[]
    by: InviteScalarFieldEnum[] | InviteScalarFieldEnum
    having?: InviteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InviteCountAggregateInputType | true
    _min?: InviteMinAggregateInputType
    _max?: InviteMaxAggregateInputType
  }
  export type InviteGroupByOutputType = {
    id: string
    tenantId: string
    email: string
    role: $Enums.Role
    token: string
    status: $Enums.InviteStatus
    expiresAt: Date
    createdAt: Date
    _count: InviteCountAggregateOutputType | null
    _min: InviteMinAggregateOutputType | null
    _max: InviteMaxAggregateOutputType | null
  }
  type GetInviteGroupByPayload<T extends InviteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InviteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InviteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InviteGroupByOutputType[P]>
            : GetScalarType<T[P], InviteGroupByOutputType[P]>
        }
      >
    >
  export type InviteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    email?: boolean
    role?: boolean
    token?: boolean
    status?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invite"]>
  export type InviteSelectScalar = {
    id?: boolean
    tenantId?: boolean
    email?: boolean
    role?: boolean
    token?: boolean
    status?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }
  export type InviteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "email" | "role" | "token" | "status" | "expiresAt" | "createdAt", ExtArgs["result"]["invite"]>
  export type InviteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type $InvitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invite"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      email: string
      role: $Enums.Role
      token: string
      status: $Enums.InviteStatus
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["invite"]>
    composites: {}
  }
  type InviteGetPayload<S extends boolean | null | undefined | InviteDefaultArgs> = $Result.GetResult<Prisma.$InvitePayload, S>
  type InviteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InviteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InviteCountAggregateInputType | true
    }
  export interface InviteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invite'], meta: { name: 'Invite' } }
    findUnique<T extends InviteFindUniqueArgs>(args: SelectSubset<T, InviteFindUniqueArgs<ExtArgs>>): Prisma__InviteClient<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    findUniqueOrThrow<T extends InviteFindUniqueOrThrowArgs>(args: SelectSubset<T, InviteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InviteClient<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    findFirst<T extends InviteFindFirstArgs>(args?: SelectSubset<T, InviteFindFirstArgs<ExtArgs>>): Prisma__InviteClient<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    findFirstOrThrow<T extends InviteFindFirstOrThrowArgs>(args?: SelectSubset<T, InviteFindFirstOrThrowArgs<ExtArgs>>): Prisma__InviteClient<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    findMany<T extends InviteFindManyArgs>(args?: SelectSubset<T, InviteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>
    create<T extends InviteCreateArgs>(args: SelectSubset<T, InviteCreateArgs<ExtArgs>>): Prisma__InviteClient<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    createMany<T extends InviteCreateManyArgs>(args?: SelectSubset<T, InviteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>
    delete<T extends InviteDeleteArgs>(args: SelectSubset<T, InviteDeleteArgs<ExtArgs>>): Prisma__InviteClient<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    update<T extends InviteUpdateArgs>(args: SelectSubset<T, InviteUpdateArgs<ExtArgs>>): Prisma__InviteClient<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    deleteMany<T extends InviteDeleteManyArgs>(args?: SelectSubset<T, InviteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>
    updateMany<T extends InviteUpdateManyArgs>(args: SelectSubset<T, InviteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>
    upsert<T extends InviteUpsertArgs>(args: SelectSubset<T, InviteUpsertArgs<ExtArgs>>): Prisma__InviteClient<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    count<T extends InviteCountArgs>(
      args?: Subset<T, InviteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InviteCountAggregateOutputType>
        : number
    >
    aggregate<T extends InviteAggregateArgs>(args: Subset<T, InviteAggregateArgs>): Prisma.PrismaPromise<GetInviteAggregateType<T>>
    groupBy<
      T extends InviteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InviteGroupByArgs['orderBy'] }
        : { orderBy?: InviteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InviteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInviteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  readonly fields: InviteFieldRefs;
  }
  export interface Prisma__InviteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }
  interface InviteFieldRefs {
    readonly id: FieldRef<"Invite", 'String'>
    readonly tenantId: FieldRef<"Invite", 'String'>
    readonly email: FieldRef<"Invite", 'String'>
    readonly role: FieldRef<"Invite", 'Role'>
    readonly token: FieldRef<"Invite", 'String'>
    readonly status: FieldRef<"Invite", 'InviteStatus'>
    readonly expiresAt: FieldRef<"Invite", 'DateTime'>
    readonly createdAt: FieldRef<"Invite", 'DateTime'>
  }
  export type InviteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: InviteSelect<ExtArgs> | null
    omit?: InviteOmit<ExtArgs> | null
    include?: InviteInclude<ExtArgs> | null
    where: InviteWhereUniqueInput
  }
  export type InviteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: InviteSelect<ExtArgs> | null
    omit?: InviteOmit<ExtArgs> | null
    include?: InviteInclude<ExtArgs> | null
    where: InviteWhereUniqueInput
  }
  export type InviteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: InviteSelect<ExtArgs> | null
    omit?: InviteOmit<ExtArgs> | null
    include?: InviteInclude<ExtArgs> | null
    where?: InviteWhereInput
    orderBy?: InviteOrderByWithRelationInput | InviteOrderByWithRelationInput[]
    cursor?: InviteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InviteScalarFieldEnum | InviteScalarFieldEnum[]
  }
  export type InviteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: InviteSelect<ExtArgs> | null
    omit?: InviteOmit<ExtArgs> | null
    include?: InviteInclude<ExtArgs> | null
    where?: InviteWhereInput
    orderBy?: InviteOrderByWithRelationInput | InviteOrderByWithRelationInput[]
    cursor?: InviteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InviteScalarFieldEnum | InviteScalarFieldEnum[]
  }
  export type InviteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: InviteSelect<ExtArgs> | null
    omit?: InviteOmit<ExtArgs> | null
    include?: InviteInclude<ExtArgs> | null
    where?: InviteWhereInput
    orderBy?: InviteOrderByWithRelationInput | InviteOrderByWithRelationInput[]
    cursor?: InviteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InviteScalarFieldEnum | InviteScalarFieldEnum[]
  }
  export type InviteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: InviteSelect<ExtArgs> | null
    omit?: InviteOmit<ExtArgs> | null
    include?: InviteInclude<ExtArgs> | null
    data: XOR<InviteCreateInput, InviteUncheckedCreateInput>
  }
  export type InviteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    data: InviteCreateManyInput | InviteCreateManyInput[]
    skipDuplicates?: boolean
  }
  export type InviteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: InviteSelect<ExtArgs> | null
    omit?: InviteOmit<ExtArgs> | null
    include?: InviteInclude<ExtArgs> | null
    data: XOR<InviteUpdateInput, InviteUncheckedUpdateInput>
    where: InviteWhereUniqueInput
  }
  export type InviteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    data: XOR<InviteUpdateManyMutationInput, InviteUncheckedUpdateManyInput>
    where?: InviteWhereInput
    limit?: number
  }
  export type InviteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: InviteSelect<ExtArgs> | null
    omit?: InviteOmit<ExtArgs> | null
    include?: InviteInclude<ExtArgs> | null
    where: InviteWhereUniqueInput
    create: XOR<InviteCreateInput, InviteUncheckedCreateInput>
    update: XOR<InviteUpdateInput, InviteUncheckedUpdateInput>
  }
  export type InviteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: InviteSelect<ExtArgs> | null
    omit?: InviteOmit<ExtArgs> | null
    include?: InviteInclude<ExtArgs> | null
    where: InviteWhereUniqueInput
  }
  export type InviteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InviteWhereInput
    limit?: number
  }
  export type InviteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: InviteSelect<ExtArgs> | null
    omit?: InviteOmit<ExtArgs> | null
    include?: InviteInclude<ExtArgs> | null
  }
  export type AggregateProjectMember = {
    _count: ProjectMemberCountAggregateOutputType | null
    _min: ProjectMemberMinAggregateOutputType | null
    _max: ProjectMemberMaxAggregateOutputType | null
  }
  export type ProjectMemberMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    userId: string | null
    projectId: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }
  export type ProjectMemberMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    userId: string | null
    projectId: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }
  export type ProjectMemberCountAggregateOutputType = {
    id: number
    tenantId: number
    userId: number
    projectId: number
    role: number
    createdAt: number
    _all: number
  }
  export type ProjectMemberMinAggregateInputType = {
    id?: true
    tenantId?: true
    userId?: true
    projectId?: true
    role?: true
    createdAt?: true
  }
  export type ProjectMemberMaxAggregateInputType = {
    id?: true
    tenantId?: true
    userId?: true
    projectId?: true
    role?: true
    createdAt?: true
  }
  export type ProjectMemberCountAggregateInputType = {
    id?: true
    tenantId?: true
    userId?: true
    projectId?: true
    role?: true
    createdAt?: true
    _all?: true
  }
  export type ProjectMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectMemberWhereInput
    orderBy?: ProjectMemberOrderByWithRelationInput | ProjectMemberOrderByWithRelationInput[]
    cursor?: ProjectMemberWhereUniqueInput
    take?: number
    skip?: number
    _count?: true | ProjectMemberCountAggregateInputType
    _min?: ProjectMemberMinAggregateInputType
    _max?: ProjectMemberMaxAggregateInputType
  }
  export type GetProjectMemberAggregateType<T extends ProjectMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectMember[P]>
      : GetScalarType<T[P], AggregateProjectMember[P]>
  }
  export type ProjectMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectMemberWhereInput
    orderBy?: ProjectMemberOrderByWithAggregationInput | ProjectMemberOrderByWithAggregationInput[]
    by: ProjectMemberScalarFieldEnum[] | ProjectMemberScalarFieldEnum
    having?: ProjectMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectMemberCountAggregateInputType | true
    _min?: ProjectMemberMinAggregateInputType
    _max?: ProjectMemberMaxAggregateInputType
  }
  export type ProjectMemberGroupByOutputType = {
    id: string
    tenantId: string
    userId: string
    projectId: string
    role: $Enums.Role
    createdAt: Date
    _count: ProjectMemberCountAggregateOutputType | null
    _min: ProjectMemberMinAggregateOutputType | null
    _max: ProjectMemberMaxAggregateOutputType | null
  }
  type GetProjectMemberGroupByPayload<T extends ProjectMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectMemberGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectMemberGroupByOutputType[P]>
        }
      >
    >
  export type ProjectMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    userId?: boolean
    projectId?: boolean
    role?: boolean
    createdAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectMember"]>
  export type ProjectMemberSelectScalar = {
    id?: boolean
    tenantId?: boolean
    userId?: boolean
    projectId?: boolean
    role?: boolean
    createdAt?: boolean
  }
  export type ProjectMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "userId" | "projectId" | "role" | "createdAt", ExtArgs["result"]["projectMember"]>
  export type ProjectMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type $ProjectMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectMember"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      userId: string
      projectId: string
      role: $Enums.Role
      createdAt: Date
    }, ExtArgs["result"]["projectMember"]>
    composites: {}
  }
  type ProjectMemberGetPayload<S extends boolean | null | undefined | ProjectMemberDefaultArgs> = $Result.GetResult<Prisma.$ProjectMemberPayload, S>
  type ProjectMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectMemberCountAggregateInputType | true
    }
  export interface ProjectMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectMember'], meta: { name: 'ProjectMember' } }
    findUnique<T extends ProjectMemberFindUniqueArgs>(args: SelectSubset<T, ProjectMemberFindUniqueArgs<ExtArgs>>): Prisma__ProjectMemberClient<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    findUniqueOrThrow<T extends ProjectMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectMemberClient<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    findFirst<T extends ProjectMemberFindFirstArgs>(args?: SelectSubset<T, ProjectMemberFindFirstArgs<ExtArgs>>): Prisma__ProjectMemberClient<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    findFirstOrThrow<T extends ProjectMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectMemberClient<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    findMany<T extends ProjectMemberFindManyArgs>(args?: SelectSubset<T, ProjectMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>
    create<T extends ProjectMemberCreateArgs>(args: SelectSubset<T, ProjectMemberCreateArgs<ExtArgs>>): Prisma__ProjectMemberClient<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    createMany<T extends ProjectMemberCreateManyArgs>(args?: SelectSubset<T, ProjectMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>
    delete<T extends ProjectMemberDeleteArgs>(args: SelectSubset<T, ProjectMemberDeleteArgs<ExtArgs>>): Prisma__ProjectMemberClient<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    update<T extends ProjectMemberUpdateArgs>(args: SelectSubset<T, ProjectMemberUpdateArgs<ExtArgs>>): Prisma__ProjectMemberClient<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    deleteMany<T extends ProjectMemberDeleteManyArgs>(args?: SelectSubset<T, ProjectMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>
    updateMany<T extends ProjectMemberUpdateManyArgs>(args: SelectSubset<T, ProjectMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>
    upsert<T extends ProjectMemberUpsertArgs>(args: SelectSubset<T, ProjectMemberUpsertArgs<ExtArgs>>): Prisma__ProjectMemberClient<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    count<T extends ProjectMemberCountArgs>(
      args?: Subset<T, ProjectMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectMemberCountAggregateOutputType>
        : number
    >
    aggregate<T extends ProjectMemberAggregateArgs>(args: Subset<T, ProjectMemberAggregateArgs>): Prisma.PrismaPromise<GetProjectMemberAggregateType<T>>
    groupBy<
      T extends ProjectMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectMemberGroupByArgs['orderBy'] }
        : { orderBy?: ProjectMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  readonly fields: ProjectMemberFieldRefs;
  }
  export interface Prisma__ProjectMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }
  interface ProjectMemberFieldRefs {
    readonly id: FieldRef<"ProjectMember", 'String'>
    readonly tenantId: FieldRef<"ProjectMember", 'String'>
    readonly userId: FieldRef<"ProjectMember", 'String'>
    readonly projectId: FieldRef<"ProjectMember", 'String'>
    readonly role: FieldRef<"ProjectMember", 'Role'>
    readonly createdAt: FieldRef<"ProjectMember", 'DateTime'>
  }
  export type ProjectMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: ProjectMemberSelect<ExtArgs> | null
    omit?: ProjectMemberOmit<ExtArgs> | null
    include?: ProjectMemberInclude<ExtArgs> | null
    where: ProjectMemberWhereUniqueInput
  }
  export type ProjectMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: ProjectMemberSelect<ExtArgs> | null
    omit?: ProjectMemberOmit<ExtArgs> | null
    include?: ProjectMemberInclude<ExtArgs> | null
    where: ProjectMemberWhereUniqueInput
  }
  export type ProjectMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: ProjectMemberSelect<ExtArgs> | null
    omit?: ProjectMemberOmit<ExtArgs> | null
    include?: ProjectMemberInclude<ExtArgs> | null
    where?: ProjectMemberWhereInput
    orderBy?: ProjectMemberOrderByWithRelationInput | ProjectMemberOrderByWithRelationInput[]
    cursor?: ProjectMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectMemberScalarFieldEnum | ProjectMemberScalarFieldEnum[]
  }
  export type ProjectMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: ProjectMemberSelect<ExtArgs> | null
    omit?: ProjectMemberOmit<ExtArgs> | null
    include?: ProjectMemberInclude<ExtArgs> | null
    where?: ProjectMemberWhereInput
    orderBy?: ProjectMemberOrderByWithRelationInput | ProjectMemberOrderByWithRelationInput[]
    cursor?: ProjectMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectMemberScalarFieldEnum | ProjectMemberScalarFieldEnum[]
  }
  export type ProjectMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: ProjectMemberSelect<ExtArgs> | null
    omit?: ProjectMemberOmit<ExtArgs> | null
    include?: ProjectMemberInclude<ExtArgs> | null
    where?: ProjectMemberWhereInput
    orderBy?: ProjectMemberOrderByWithRelationInput | ProjectMemberOrderByWithRelationInput[]
    cursor?: ProjectMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectMemberScalarFieldEnum | ProjectMemberScalarFieldEnum[]
  }
  export type ProjectMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: ProjectMemberSelect<ExtArgs> | null
    omit?: ProjectMemberOmit<ExtArgs> | null
    include?: ProjectMemberInclude<ExtArgs> | null
    data: XOR<ProjectMemberCreateInput, ProjectMemberUncheckedCreateInput>
  }
  export type ProjectMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    data: ProjectMemberCreateManyInput | ProjectMemberCreateManyInput[]
    skipDuplicates?: boolean
  }
  export type ProjectMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: ProjectMemberSelect<ExtArgs> | null
    omit?: ProjectMemberOmit<ExtArgs> | null
    include?: ProjectMemberInclude<ExtArgs> | null
    data: XOR<ProjectMemberUpdateInput, ProjectMemberUncheckedUpdateInput>
    where: ProjectMemberWhereUniqueInput
  }
  export type ProjectMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    data: XOR<ProjectMemberUpdateManyMutationInput, ProjectMemberUncheckedUpdateManyInput>
    where?: ProjectMemberWhereInput
    limit?: number
  }
  export type ProjectMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: ProjectMemberSelect<ExtArgs> | null
    omit?: ProjectMemberOmit<ExtArgs> | null
    include?: ProjectMemberInclude<ExtArgs> | null
    where: ProjectMemberWhereUniqueInput
    create: XOR<ProjectMemberCreateInput, ProjectMemberUncheckedCreateInput>
    update: XOR<ProjectMemberUpdateInput, ProjectMemberUncheckedUpdateInput>
  }
  export type ProjectMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: ProjectMemberSelect<ExtArgs> | null
    omit?: ProjectMemberOmit<ExtArgs> | null
    include?: ProjectMemberInclude<ExtArgs> | null
    where: ProjectMemberWhereUniqueInput
  }
  export type ProjectMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectMemberWhereInput
    limit?: number
  }
  export type ProjectMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: ProjectMemberSelect<ExtArgs> | null
    omit?: ProjectMemberOmit<ExtArgs> | null
    include?: ProjectMemberInclude<ExtArgs> | null
  }
  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }
  export type AuditLogMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    userId: string | null
    entityType: $Enums.AuditEntityType | null
    entityId: string | null
    action: $Enums.AuditAction | null
    timestamp: Date | null
  }
  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    userId: string | null
    entityType: $Enums.AuditEntityType | null
    entityId: string | null
    action: $Enums.AuditAction | null
    timestamp: Date | null
  }
  export type AuditLogCountAggregateOutputType = {
    id: number
    tenantId: number
    userId: number
    entityType: number
    entityId: number
    action: number
    changes: number
    timestamp: number
    _all: number
  }
  export type AuditLogMinAggregateInputType = {
    id?: true
    tenantId?: true
    userId?: true
    entityType?: true
    entityId?: true
    action?: true
    timestamp?: true
  }
  export type AuditLogMaxAggregateInputType = {
    id?: true
    tenantId?: true
    userId?: true
    entityType?: true
    entityId?: true
    action?: true
    timestamp?: true
  }
  export type AuditLogCountAggregateInputType = {
    id?: true
    tenantId?: true
    userId?: true
    entityType?: true
    entityId?: true
    action?: true
    changes?: true
    timestamp?: true
    _all?: true
  }
  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    _count?: true | AuditLogCountAggregateInputType
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }
  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }
  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }
  export type AuditLogGroupByOutputType = {
    id: string
    tenantId: string
    userId: string
    entityType: $Enums.AuditEntityType
    entityId: string
    action: $Enums.AuditAction
    changes: JsonValue
    timestamp: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }
  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >
  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    userId?: boolean
    entityType?: boolean
    entityId?: boolean
    action?: boolean
    changes?: boolean
    timestamp?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>
  export type AuditLogSelectScalar = {
    id?: boolean
    tenantId?: boolean
    userId?: boolean
    entityType?: boolean
    entityId?: boolean
    action?: boolean
    changes?: boolean
    timestamp?: boolean
  }
  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "userId" | "entityType" | "entityId" | "action" | "changes" | "timestamp", ExtArgs["result"]["auditLog"]>
  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      userId: string
      entityType: $Enums.AuditEntityType
      entityId: string
      action: $Enums.AuditAction
      changes: Prisma.JsonValue
      timestamp: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }
  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>
  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }
  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>
    groupBy<
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  readonly fields: AuditLogFieldRefs;
  }
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly tenantId: FieldRef<"AuditLog", 'String'>
    readonly userId: FieldRef<"AuditLog", 'String'>
    readonly entityType: FieldRef<"AuditLog", 'AuditEntityType'>
    readonly entityId: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'AuditAction'>
    readonly changes: FieldRef<"AuditLog", 'Json'>
    readonly timestamp: FieldRef<"AuditLog", 'DateTime'>
  }
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: AuditLogSelect<ExtArgs> | null
    omit?: AuditLogOmit<ExtArgs> | null
    include?: AuditLogInclude<ExtArgs> | null
    where: AuditLogWhereUniqueInput
  }
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: AuditLogSelect<ExtArgs> | null
    omit?: AuditLogOmit<ExtArgs> | null
    include?: AuditLogInclude<ExtArgs> | null
    where: AuditLogWhereUniqueInput
  }
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: AuditLogSelect<ExtArgs> | null
    omit?: AuditLogOmit<ExtArgs> | null
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: AuditLogSelect<ExtArgs> | null
    omit?: AuditLogOmit<ExtArgs> | null
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: AuditLogSelect<ExtArgs> | null
    omit?: AuditLogOmit<ExtArgs> | null
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: AuditLogSelect<ExtArgs> | null
    omit?: AuditLogOmit<ExtArgs> | null
    include?: AuditLogInclude<ExtArgs> | null
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: AuditLogSelect<ExtArgs> | null
    omit?: AuditLogOmit<ExtArgs> | null
    include?: AuditLogInclude<ExtArgs> | null
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    where: AuditLogWhereUniqueInput
  }
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    where?: AuditLogWhereInput
    limit?: number
  }
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: AuditLogSelect<ExtArgs> | null
    omit?: AuditLogOmit<ExtArgs> | null
    include?: AuditLogInclude<ExtArgs> | null
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: AuditLogSelect<ExtArgs> | null
    omit?: AuditLogOmit<ExtArgs> | null
    include?: AuditLogInclude<ExtArgs> | null
    where: AuditLogWhereUniqueInput
  }
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    limit?: number
  }
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: AuditLogSelect<ExtArgs> | null
    omit?: AuditLogOmit<ExtArgs> | null
    include?: AuditLogInclude<ExtArgs> | null
  }
  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }
  export type NotificationMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    userId: string | null
    type: $Enums.NotificationType | null
    message: string | null
    link: string | null
    isRead: boolean | null
    createdAt: Date | null
  }
  export type NotificationMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    userId: string | null
    type: $Enums.NotificationType | null
    message: string | null
    link: string | null
    isRead: boolean | null
    createdAt: Date | null
  }
  export type NotificationCountAggregateOutputType = {
    id: number
    tenantId: number
    userId: number
    type: number
    message: number
    link: number
    isRead: number
    createdAt: number
    _all: number
  }
  export type NotificationMinAggregateInputType = {
    id?: true
    tenantId?: true
    userId?: true
    type?: true
    message?: true
    link?: true
    isRead?: true
    createdAt?: true
  }
  export type NotificationMaxAggregateInputType = {
    id?: true
    tenantId?: true
    userId?: true
    type?: true
    message?: true
    link?: true
    isRead?: true
    createdAt?: true
  }
  export type NotificationCountAggregateInputType = {
    id?: true
    tenantId?: true
    userId?: true
    type?: true
    message?: true
    link?: true
    isRead?: true
    createdAt?: true
    _all?: true
  }
  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    _count?: true | NotificationCountAggregateInputType
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }
  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }
  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }
  export type NotificationGroupByOutputType = {
    id: string
    tenantId: string
    userId: string
    type: $Enums.NotificationType
    message: string
    link: string | null
    isRead: boolean
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }
  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >
  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    userId?: boolean
    type?: boolean
    message?: boolean
    link?: boolean
    isRead?: boolean
    createdAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>
  export type NotificationSelectScalar = {
    id?: boolean
    tenantId?: boolean
    userId?: boolean
    type?: boolean
    message?: boolean
    link?: boolean
    isRead?: boolean
    createdAt?: boolean
  }
  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "userId" | "type" | "message" | "link" | "isRead" | "createdAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      userId: string
      type: $Enums.NotificationType
      message: string
      link: string | null
      isRead: boolean
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }
  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>
  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }
  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  readonly fields: NotificationFieldRefs;
  }
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly tenantId: FieldRef<"Notification", 'String'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'NotificationType'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly link: FieldRef<"Notification", 'String'>
    readonly isRead: FieldRef<"Notification", 'Boolean'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: NotificationSelect<ExtArgs> | null
    omit?: NotificationOmit<ExtArgs> | null
    include?: NotificationInclude<ExtArgs> | null
    where: NotificationWhereUniqueInput
  }
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: NotificationSelect<ExtArgs> | null
    omit?: NotificationOmit<ExtArgs> | null
    include?: NotificationInclude<ExtArgs> | null
    where: NotificationWhereUniqueInput
  }
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: NotificationSelect<ExtArgs> | null
    omit?: NotificationOmit<ExtArgs> | null
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: NotificationSelect<ExtArgs> | null
    omit?: NotificationOmit<ExtArgs> | null
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: NotificationSelect<ExtArgs> | null
    omit?: NotificationOmit<ExtArgs> | null
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: NotificationSelect<ExtArgs> | null
    omit?: NotificationOmit<ExtArgs> | null
    include?: NotificationInclude<ExtArgs> | null
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: NotificationSelect<ExtArgs> | null
    omit?: NotificationOmit<ExtArgs> | null
    include?: NotificationInclude<ExtArgs> | null
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    where: NotificationWhereUniqueInput
  }
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    where?: NotificationWhereInput
    limit?: number
  }
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: NotificationSelect<ExtArgs> | null
    omit?: NotificationOmit<ExtArgs> | null
    include?: NotificationInclude<ExtArgs> | null
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: NotificationSelect<ExtArgs> | null
    omit?: NotificationOmit<ExtArgs> | null
    include?: NotificationInclude<ExtArgs> | null
    where: NotificationWhereUniqueInput
  }
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    limit?: number
  }
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: NotificationSelect<ExtArgs> | null
    omit?: NotificationOmit<ExtArgs> | null
    include?: NotificationInclude<ExtArgs> | null
  }
  export type AggregateEmailVerification = {
    _count: EmailVerificationCountAggregateOutputType | null
    _min: EmailVerificationMinAggregateOutputType | null
    _max: EmailVerificationMaxAggregateOutputType | null
  }
  export type EmailVerificationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }
  export type EmailVerificationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }
  export type EmailVerificationCountAggregateOutputType = {
    id: number
    userId: number
    token: number
    expiresAt: number
    createdAt: number
    _all: number
  }
  export type EmailVerificationMinAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    createdAt?: true
  }
  export type EmailVerificationMaxAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    createdAt?: true
  }
  export type EmailVerificationCountAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }
  export type EmailVerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailVerificationWhereInput
    orderBy?: EmailVerificationOrderByWithRelationInput | EmailVerificationOrderByWithRelationInput[]
    cursor?: EmailVerificationWhereUniqueInput
    take?: number
    skip?: number
    _count?: true | EmailVerificationCountAggregateInputType
    _min?: EmailVerificationMinAggregateInputType
    _max?: EmailVerificationMaxAggregateInputType
  }
  export type GetEmailVerificationAggregateType<T extends EmailVerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateEmailVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmailVerification[P]>
      : GetScalarType<T[P], AggregateEmailVerification[P]>
  }
  export type EmailVerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailVerificationWhereInput
    orderBy?: EmailVerificationOrderByWithAggregationInput | EmailVerificationOrderByWithAggregationInput[]
    by: EmailVerificationScalarFieldEnum[] | EmailVerificationScalarFieldEnum
    having?: EmailVerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailVerificationCountAggregateInputType | true
    _min?: EmailVerificationMinAggregateInputType
    _max?: EmailVerificationMaxAggregateInputType
  }
  export type EmailVerificationGroupByOutputType = {
    id: string
    userId: string
    token: string
    expiresAt: Date
    createdAt: Date
    _count: EmailVerificationCountAggregateOutputType | null
    _min: EmailVerificationMinAggregateOutputType | null
    _max: EmailVerificationMaxAggregateOutputType | null
  }
  type GetEmailVerificationGroupByPayload<T extends EmailVerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailVerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailVerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailVerificationGroupByOutputType[P]>
            : GetScalarType<T[P], EmailVerificationGroupByOutputType[P]>
        }
      >
    >
  export type EmailVerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailVerification"]>
  export type EmailVerificationSelectScalar = {
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }
  export type EmailVerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "token" | "expiresAt" | "createdAt", ExtArgs["result"]["emailVerification"]>
  export type EmailVerificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type $EmailVerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmailVerification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      token: string
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["emailVerification"]>
    composites: {}
  }
  type EmailVerificationGetPayload<S extends boolean | null | undefined | EmailVerificationDefaultArgs> = $Result.GetResult<Prisma.$EmailVerificationPayload, S>
  type EmailVerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmailVerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmailVerificationCountAggregateInputType | true
    }
  export interface EmailVerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmailVerification'], meta: { name: 'EmailVerification' } }
    findUnique<T extends EmailVerificationFindUniqueArgs>(args: SelectSubset<T, EmailVerificationFindUniqueArgs<ExtArgs>>): Prisma__EmailVerificationClient<$Result.GetResult<Prisma.$EmailVerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    findUniqueOrThrow<T extends EmailVerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailVerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailVerificationClient<$Result.GetResult<Prisma.$EmailVerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    findFirst<T extends EmailVerificationFindFirstArgs>(args?: SelectSubset<T, EmailVerificationFindFirstArgs<ExtArgs>>): Prisma__EmailVerificationClient<$Result.GetResult<Prisma.$EmailVerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    findFirstOrThrow<T extends EmailVerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailVerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailVerificationClient<$Result.GetResult<Prisma.$EmailVerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    findMany<T extends EmailVerificationFindManyArgs>(args?: SelectSubset<T, EmailVerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailVerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>
    create<T extends EmailVerificationCreateArgs>(args: SelectSubset<T, EmailVerificationCreateArgs<ExtArgs>>): Prisma__EmailVerificationClient<$Result.GetResult<Prisma.$EmailVerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    createMany<T extends EmailVerificationCreateManyArgs>(args?: SelectSubset<T, EmailVerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>
    delete<T extends EmailVerificationDeleteArgs>(args: SelectSubset<T, EmailVerificationDeleteArgs<ExtArgs>>): Prisma__EmailVerificationClient<$Result.GetResult<Prisma.$EmailVerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    update<T extends EmailVerificationUpdateArgs>(args: SelectSubset<T, EmailVerificationUpdateArgs<ExtArgs>>): Prisma__EmailVerificationClient<$Result.GetResult<Prisma.$EmailVerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    deleteMany<T extends EmailVerificationDeleteManyArgs>(args?: SelectSubset<T, EmailVerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>
    updateMany<T extends EmailVerificationUpdateManyArgs>(args: SelectSubset<T, EmailVerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>
    upsert<T extends EmailVerificationUpsertArgs>(args: SelectSubset<T, EmailVerificationUpsertArgs<ExtArgs>>): Prisma__EmailVerificationClient<$Result.GetResult<Prisma.$EmailVerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
    count<T extends EmailVerificationCountArgs>(
      args?: Subset<T, EmailVerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailVerificationCountAggregateOutputType>
        : number
    >
    aggregate<T extends EmailVerificationAggregateArgs>(args: Subset<T, EmailVerificationAggregateArgs>): Prisma.PrismaPromise<GetEmailVerificationAggregateType<T>>
    groupBy<
      T extends EmailVerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailVerificationGroupByArgs['orderBy'] }
        : { orderBy?: EmailVerificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmailVerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  readonly fields: EmailVerificationFieldRefs;
  }
  export interface Prisma__EmailVerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }
  interface EmailVerificationFieldRefs {
    readonly id: FieldRef<"EmailVerification", 'String'>
    readonly userId: FieldRef<"EmailVerification", 'String'>
    readonly token: FieldRef<"EmailVerification", 'String'>
    readonly expiresAt: FieldRef<"EmailVerification", 'DateTime'>
    readonly createdAt: FieldRef<"EmailVerification", 'DateTime'>
  }
  export type EmailVerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: EmailVerificationSelect<ExtArgs> | null
    omit?: EmailVerificationOmit<ExtArgs> | null
    include?: EmailVerificationInclude<ExtArgs> | null
    where: EmailVerificationWhereUniqueInput
  }
  export type EmailVerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: EmailVerificationSelect<ExtArgs> | null
    omit?: EmailVerificationOmit<ExtArgs> | null
    include?: EmailVerificationInclude<ExtArgs> | null
    where: EmailVerificationWhereUniqueInput
  }
  export type EmailVerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: EmailVerificationSelect<ExtArgs> | null
    omit?: EmailVerificationOmit<ExtArgs> | null
    include?: EmailVerificationInclude<ExtArgs> | null
    where?: EmailVerificationWhereInput
    orderBy?: EmailVerificationOrderByWithRelationInput | EmailVerificationOrderByWithRelationInput[]
    cursor?: EmailVerificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmailVerificationScalarFieldEnum | EmailVerificationScalarFieldEnum[]
  }
  export type EmailVerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: EmailVerificationSelect<ExtArgs> | null
    omit?: EmailVerificationOmit<ExtArgs> | null
    include?: EmailVerificationInclude<ExtArgs> | null
    where?: EmailVerificationWhereInput
    orderBy?: EmailVerificationOrderByWithRelationInput | EmailVerificationOrderByWithRelationInput[]
    cursor?: EmailVerificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmailVerificationScalarFieldEnum | EmailVerificationScalarFieldEnum[]
  }
  export type EmailVerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: EmailVerificationSelect<ExtArgs> | null
    omit?: EmailVerificationOmit<ExtArgs> | null
    include?: EmailVerificationInclude<ExtArgs> | null
    where?: EmailVerificationWhereInput
    orderBy?: EmailVerificationOrderByWithRelationInput | EmailVerificationOrderByWithRelationInput[]
    cursor?: EmailVerificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmailVerificationScalarFieldEnum | EmailVerificationScalarFieldEnum[]
  }
  export type EmailVerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: EmailVerificationSelect<ExtArgs> | null
    omit?: EmailVerificationOmit<ExtArgs> | null
    include?: EmailVerificationInclude<ExtArgs> | null
    data: XOR<EmailVerificationCreateInput, EmailVerificationUncheckedCreateInput>
  }
  export type EmailVerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    data: EmailVerificationCreateManyInput | EmailVerificationCreateManyInput[]
    skipDuplicates?: boolean
  }
  export type EmailVerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: EmailVerificationSelect<ExtArgs> | null
    omit?: EmailVerificationOmit<ExtArgs> | null
    include?: EmailVerificationInclude<ExtArgs> | null
    data: XOR<EmailVerificationUpdateInput, EmailVerificationUncheckedUpdateInput>
    where: EmailVerificationWhereUniqueInput
  }
  export type EmailVerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    data: XOR<EmailVerificationUpdateManyMutationInput, EmailVerificationUncheckedUpdateManyInput>
    where?: EmailVerificationWhereInput
    limit?: number
  }
  export type EmailVerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: EmailVerificationSelect<ExtArgs> | null
    omit?: EmailVerificationOmit<ExtArgs> | null
    include?: EmailVerificationInclude<ExtArgs> | null
    where: EmailVerificationWhereUniqueInput
    create: XOR<EmailVerificationCreateInput, EmailVerificationUncheckedCreateInput>
    update: XOR<EmailVerificationUpdateInput, EmailVerificationUncheckedUpdateInput>
  }
  export type EmailVerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: EmailVerificationSelect<ExtArgs> | null
    omit?: EmailVerificationOmit<ExtArgs> | null
    include?: EmailVerificationInclude<ExtArgs> | null
    where: EmailVerificationWhereUniqueInput
  }
  export type EmailVerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailVerificationWhereInput
    limit?: number
  }
  export type EmailVerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    select?: EmailVerificationSelect<ExtArgs> | null
    omit?: EmailVerificationOmit<ExtArgs> | null
    include?: EmailVerificationInclude<ExtArgs> | null
  }
  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };
  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]
  export const UserScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    email: 'email',
    passwordHash: 'passwordHash',
    name: 'name',
    role: 'role',
    isActive: 'isActive',
    isVerified: 'isVerified',
    totpSecret: 'totpSecret',
    totpEnabled: 'totpEnabled',
    avatarUrl: 'avatarUrl',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };
  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]
  export const TenantScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };
  export type TenantScalarFieldEnum = (typeof TenantScalarFieldEnum)[keyof typeof TenantScalarFieldEnum]
  export const RefreshTokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    expiresAt: 'expiresAt',
    userId: 'userId',
    createdAt: 'createdAt'
  };
  export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum]
  export const ProjectScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    name: 'name',
    description: 'description',
    status: 'status',
    startDate: 'startDate',
    endDate: 'endDate',
    createdBy: 'createdBy',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };
  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]
  export const TaskScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    projectId: 'projectId',
    title: 'title',
    description: 'description',
    status: 'status',
    priority: 'priority',
    assigneeId: 'assigneeId',
    dueDate: 'dueDate',
    createdBy: 'createdBy',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };
  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]
  export const CommentScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    projectId: 'projectId',
    userId: 'userId',
    parentId: 'parentId',
    text: 'text',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };
  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]
  export const InviteScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    email: 'email',
    role: 'role',
    token: 'token',
    status: 'status',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };
  export type InviteScalarFieldEnum = (typeof InviteScalarFieldEnum)[keyof typeof InviteScalarFieldEnum]
  export const ProjectMemberScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    userId: 'userId',
    projectId: 'projectId',
    role: 'role',
    createdAt: 'createdAt'
  };
  export type ProjectMemberScalarFieldEnum = (typeof ProjectMemberScalarFieldEnum)[keyof typeof ProjectMemberScalarFieldEnum]
  export const AuditLogScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    userId: 'userId',
    entityType: 'entityType',
    entityId: 'entityId',
    action: 'action',
    changes: 'changes',
    timestamp: 'timestamp'
  };
  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]
  export const NotificationScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    userId: 'userId',
    type: 'type',
    message: 'message',
    link: 'link',
    isRead: 'isRead',
    createdAt: 'createdAt'
  };
  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]
  export const EmailVerificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    token: 'token',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };
  export type EmailVerificationScalarFieldEnum = (typeof EmailVerificationScalarFieldEnum)[keyof typeof EmailVerificationScalarFieldEnum]
  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };
  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]
  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };
  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]
  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };
  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]
  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    email: 'email',
    passwordHash: 'passwordHash',
    name: 'name',
    totpSecret: 'totpSecret',
    avatarUrl: 'avatarUrl'
  };
  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]
  export const TenantOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug'
  };
  export type TenantOrderByRelevanceFieldEnum = (typeof TenantOrderByRelevanceFieldEnum)[keyof typeof TenantOrderByRelevanceFieldEnum]
  export const RefreshTokenOrderByRelevanceFieldEnum: {
    id: 'id',
    token: 'token',
    userId: 'userId'
  };
  export type RefreshTokenOrderByRelevanceFieldEnum = (typeof RefreshTokenOrderByRelevanceFieldEnum)[keyof typeof RefreshTokenOrderByRelevanceFieldEnum]
  export const ProjectOrderByRelevanceFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    name: 'name',
    description: 'description',
    createdBy: 'createdBy'
  };
  export type ProjectOrderByRelevanceFieldEnum = (typeof ProjectOrderByRelevanceFieldEnum)[keyof typeof ProjectOrderByRelevanceFieldEnum]
  export const TaskOrderByRelevanceFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    projectId: 'projectId',
    title: 'title',
    description: 'description',
    assigneeId: 'assigneeId',
    createdBy: 'createdBy'
  };
  export type TaskOrderByRelevanceFieldEnum = (typeof TaskOrderByRelevanceFieldEnum)[keyof typeof TaskOrderByRelevanceFieldEnum]
  export const CommentOrderByRelevanceFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    projectId: 'projectId',
    userId: 'userId',
    parentId: 'parentId',
    text: 'text'
  };
  export type CommentOrderByRelevanceFieldEnum = (typeof CommentOrderByRelevanceFieldEnum)[keyof typeof CommentOrderByRelevanceFieldEnum]
  export const InviteOrderByRelevanceFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    email: 'email',
    token: 'token'
  };
  export type InviteOrderByRelevanceFieldEnum = (typeof InviteOrderByRelevanceFieldEnum)[keyof typeof InviteOrderByRelevanceFieldEnum]
  export const ProjectMemberOrderByRelevanceFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    userId: 'userId',
    projectId: 'projectId'
  };
  export type ProjectMemberOrderByRelevanceFieldEnum = (typeof ProjectMemberOrderByRelevanceFieldEnum)[keyof typeof ProjectMemberOrderByRelevanceFieldEnum]
  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };
  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]
  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };
  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]
  export const AuditLogOrderByRelevanceFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    userId: 'userId',
    entityId: 'entityId'
  };
  export type AuditLogOrderByRelevanceFieldEnum = (typeof AuditLogOrderByRelevanceFieldEnum)[keyof typeof AuditLogOrderByRelevanceFieldEnum]
  export const NotificationOrderByRelevanceFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    userId: 'userId',
    message: 'message',
    link: 'link'
  };
  export type NotificationOrderByRelevanceFieldEnum = (typeof NotificationOrderByRelevanceFieldEnum)[keyof typeof NotificationOrderByRelevanceFieldEnum]
  export const EmailVerificationOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    token: 'token'
  };
  export type EmailVerificationOrderByRelevanceFieldEnum = (typeof EmailVerificationOrderByRelevanceFieldEnum)[keyof typeof EmailVerificationOrderByRelevanceFieldEnum]
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
  export type EnumProjectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectStatus'>
  export type EnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus'>
  export type EnumTaskPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskPriority'>
  export type EnumInviteStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InviteStatus'>
  export type EnumAuditEntityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuditEntityType'>
  export type EnumAuditActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuditAction'>
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
  export type EnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType'>
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    tenantId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isActive?: BoolFilter<"User"> | boolean
    isVerified?: BoolFilter<"User"> | boolean
    totpSecret?: StringNullableFilter<"User"> | string | null
    totpEnabled?: BoolFilter<"User"> | boolean
    avatarUrl?: StringNullableFilter<"User"> | string | null
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    createdProjects?: ProjectListRelationFilter
    assignedTasks?: TaskListRelationFilter
    createdTasks?: TaskListRelationFilter
    refreshTokens?: RefreshTokenListRelationFilter
    comments?: CommentListRelationFilter
    notifications?: NotificationListRelationFilter
    auditLogs?: AuditLogListRelationFilter
    projectMemberships?: ProjectMemberListRelationFilter
    emailVerifications?: EmailVerificationListRelationFilter
  }
  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    isVerified?: SortOrder
    totpSecret?: SortOrderInput | SortOrder
    totpEnabled?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    createdProjects?: ProjectOrderByRelationAggregateInput
    assignedTasks?: TaskOrderByRelationAggregateInput
    createdTasks?: TaskOrderByRelationAggregateInput
    refreshTokens?: RefreshTokenOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    auditLogs?: AuditLogOrderByRelationAggregateInput
    projectMemberships?: ProjectMemberOrderByRelationAggregateInput
    emailVerifications?: EmailVerificationOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }
  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tenantId_email?: UserTenantIdEmailCompoundUniqueInput
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    tenantId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isActive?: BoolFilter<"User"> | boolean
    isVerified?: BoolFilter<"User"> | boolean
    totpSecret?: StringNullableFilter<"User"> | string | null
    totpEnabled?: BoolFilter<"User"> | boolean
    avatarUrl?: StringNullableFilter<"User"> | string | null
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    createdProjects?: ProjectListRelationFilter
    assignedTasks?: TaskListRelationFilter
    createdTasks?: TaskListRelationFilter
    refreshTokens?: RefreshTokenListRelationFilter
    comments?: CommentListRelationFilter
    notifications?: NotificationListRelationFilter
    auditLogs?: AuditLogListRelationFilter
    projectMemberships?: ProjectMemberListRelationFilter
    emailVerifications?: EmailVerificationListRelationFilter
  }, "id" | "tenantId_email">
  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    isVerified?: SortOrder
    totpSecret?: SortOrderInput | SortOrder
    totpEnabled?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }
  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    tenantId?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    totpSecret?: StringNullableWithAggregatesFilter<"User"> | string | null
    totpEnabled?: BoolWithAggregatesFilter<"User"> | boolean
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }
  export type TenantWhereInput = {
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    id?: StringFilter<"Tenant"> | string
    name?: StringFilter<"Tenant"> | string
    slug?: StringFilter<"Tenant"> | string
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeFilter<"Tenant"> | Date | string
    users?: UserListRelationFilter
    projects?: ProjectListRelationFilter
    tasks?: TaskListRelationFilter
    invites?: InviteListRelationFilter
    comments?: CommentListRelationFilter
    notifications?: NotificationListRelationFilter
    auditLogs?: AuditLogListRelationFilter
    projectMembers?: ProjectMemberListRelationFilter
  }
  export type TenantOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
    projects?: ProjectOrderByRelationAggregateInput
    tasks?: TaskOrderByRelationAggregateInput
    invites?: InviteOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    auditLogs?: AuditLogOrderByRelationAggregateInput
    projectMembers?: ProjectMemberOrderByRelationAggregateInput
    _relevance?: TenantOrderByRelevanceInput
  }
  export type TenantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    name?: StringFilter<"Tenant"> | string
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeFilter<"Tenant"> | Date | string
    users?: UserListRelationFilter
    projects?: ProjectListRelationFilter
    tasks?: TaskListRelationFilter
    invites?: InviteListRelationFilter
    comments?: CommentListRelationFilter
    notifications?: NotificationListRelationFilter
    auditLogs?: AuditLogListRelationFilter
    projectMembers?: ProjectMemberListRelationFilter
  }, "id" | "slug">
  export type TenantOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TenantCountOrderByAggregateInput
    _max?: TenantMaxOrderByAggregateInput
    _min?: TenantMinOrderByAggregateInput
  }
  export type TenantScalarWhereWithAggregatesInput = {
    AND?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    OR?: TenantScalarWhereWithAggregatesInput[]
    NOT?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tenant"> | string
    name?: StringWithAggregatesFilter<"Tenant"> | string
    slug?: StringWithAggregatesFilter<"Tenant"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
  }
  export type RefreshTokenWhereInput = {
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    token?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    userId?: StringFilter<"RefreshToken"> | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }
  export type RefreshTokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: RefreshTokenOrderByRelevanceInput
  }
  export type RefreshTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    userId?: StringFilter<"RefreshToken"> | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">
  export type RefreshTokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: RefreshTokenCountOrderByAggregateInput
    _max?: RefreshTokenMaxOrderByAggregateInput
    _min?: RefreshTokenMinOrderByAggregateInput
  }
  export type RefreshTokenScalarWhereWithAggregatesInput = {
    AND?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    OR?: RefreshTokenScalarWhereWithAggregatesInput[]
    NOT?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RefreshToken"> | string
    token?: StringWithAggregatesFilter<"RefreshToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    userId?: StringWithAggregatesFilter<"RefreshToken"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
  }
  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    tenantId?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    startDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    createdBy?: StringFilter<"Project"> | string
    deletedAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    tasks?: TaskListRelationFilter
    comments?: CommentListRelationFilter
    members?: ProjectMemberListRelationFilter
  }
  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    creator?: UserOrderByWithRelationInput
    tasks?: TaskOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    members?: ProjectMemberOrderByRelationAggregateInput
    _relevance?: ProjectOrderByRelevanceInput
  }
  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    tenantId?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    startDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    createdBy?: StringFilter<"Project"> | string
    deletedAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    tasks?: TaskListRelationFilter
    comments?: CommentListRelationFilter
    members?: ProjectMemberListRelationFilter
  }, "id">
  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }
  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    tenantId?: StringWithAggregatesFilter<"Project"> | string
    name?: StringWithAggregatesFilter<"Project"> | string
    description?: StringNullableWithAggregatesFilter<"Project"> | string | null
    status?: EnumProjectStatusWithAggregatesFilter<"Project"> | $Enums.ProjectStatus
    startDate?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    createdBy?: StringWithAggregatesFilter<"Project"> | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }
  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: StringFilter<"Task"> | string
    tenantId?: StringFilter<"Task"> | string
    projectId?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    priority?: EnumTaskPriorityFilter<"Task"> | $Enums.TaskPriority
    assigneeId?: StringNullableFilter<"Task"> | string | null
    dueDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    createdBy?: StringFilter<"Task"> | string
    deletedAt?: DateTimeNullableFilter<"Task"> | Date | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    assignee?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
  }
  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    projectId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    priority?: SortOrder
    assigneeId?: SortOrderInput | SortOrder
    dueDate?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    project?: ProjectOrderByWithRelationInput
    assignee?: UserOrderByWithRelationInput
    creator?: UserOrderByWithRelationInput
    _relevance?: TaskOrderByRelevanceInput
  }
  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    tenantId?: StringFilter<"Task"> | string
    projectId?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    priority?: EnumTaskPriorityFilter<"Task"> | $Enums.TaskPriority
    assigneeId?: StringNullableFilter<"Task"> | string | null
    dueDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    createdBy?: StringFilter<"Task"> | string
    deletedAt?: DateTimeNullableFilter<"Task"> | Date | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    assignee?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">
  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    projectId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    priority?: SortOrder
    assigneeId?: SortOrderInput | SortOrder
    dueDate?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
  }
  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Task"> | string
    tenantId?: StringWithAggregatesFilter<"Task"> | string
    projectId?: StringWithAggregatesFilter<"Task"> | string
    title?: StringWithAggregatesFilter<"Task"> | string
    description?: StringNullableWithAggregatesFilter<"Task"> | string | null
    status?: EnumTaskStatusWithAggregatesFilter<"Task"> | $Enums.TaskStatus
    priority?: EnumTaskPriorityWithAggregatesFilter<"Task"> | $Enums.TaskPriority
    assigneeId?: StringNullableWithAggregatesFilter<"Task"> | string | null
    dueDate?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
    createdBy?: StringWithAggregatesFilter<"Task"> | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
  }
  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: StringFilter<"Comment"> | string
    tenantId?: StringFilter<"Comment"> | string
    projectId?: StringFilter<"Comment"> | string
    userId?: StringFilter<"Comment"> | string
    parentId?: StringNullableFilter<"Comment"> | string | null
    text?: StringFilter<"Comment"> | string
    deletedAt?: DateTimeNullableFilter<"Comment"> | Date | string | null
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    parent?: XOR<CommentNullableScalarRelationFilter, CommentWhereInput> | null
    replies?: CommentListRelationFilter
  }
  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    text?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    project?: ProjectOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    parent?: CommentOrderByWithRelationInput
    replies?: CommentOrderByRelationAggregateInput
    _relevance?: CommentOrderByRelevanceInput
  }
  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    tenantId?: StringFilter<"Comment"> | string
    projectId?: StringFilter<"Comment"> | string
    userId?: StringFilter<"Comment"> | string
    parentId?: StringNullableFilter<"Comment"> | string | null
    text?: StringFilter<"Comment"> | string
    deletedAt?: DateTimeNullableFilter<"Comment"> | Date | string | null
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    parent?: XOR<CommentNullableScalarRelationFilter, CommentWhereInput> | null
    replies?: CommentListRelationFilter
  }, "id">
  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    text?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
  }
  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comment"> | string
    tenantId?: StringWithAggregatesFilter<"Comment"> | string
    projectId?: StringWithAggregatesFilter<"Comment"> | string
    userId?: StringWithAggregatesFilter<"Comment"> | string
    parentId?: StringNullableWithAggregatesFilter<"Comment"> | string | null
    text?: StringWithAggregatesFilter<"Comment"> | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Comment"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
  }
  export type InviteWhereInput = {
    AND?: InviteWhereInput | InviteWhereInput[]
    OR?: InviteWhereInput[]
    NOT?: InviteWhereInput | InviteWhereInput[]
    id?: StringFilter<"Invite"> | string
    tenantId?: StringFilter<"Invite"> | string
    email?: StringFilter<"Invite"> | string
    role?: EnumRoleFilter<"Invite"> | $Enums.Role
    token?: StringFilter<"Invite"> | string
    status?: EnumInviteStatusFilter<"Invite"> | $Enums.InviteStatus
    expiresAt?: DateTimeFilter<"Invite"> | Date | string
    createdAt?: DateTimeFilter<"Invite"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
  }
  export type InviteOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    email?: SortOrder
    role?: SortOrder
    token?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    _relevance?: InviteOrderByRelevanceInput
  }
  export type InviteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: InviteWhereInput | InviteWhereInput[]
    OR?: InviteWhereInput[]
    NOT?: InviteWhereInput | InviteWhereInput[]
    tenantId?: StringFilter<"Invite"> | string
    email?: StringFilter<"Invite"> | string
    role?: EnumRoleFilter<"Invite"> | $Enums.Role
    status?: EnumInviteStatusFilter<"Invite"> | $Enums.InviteStatus
    expiresAt?: DateTimeFilter<"Invite"> | Date | string
    createdAt?: DateTimeFilter<"Invite"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
  }, "id" | "token">
  export type InviteOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    email?: SortOrder
    role?: SortOrder
    token?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: InviteCountOrderByAggregateInput
    _max?: InviteMaxOrderByAggregateInput
    _min?: InviteMinOrderByAggregateInput
  }
  export type InviteScalarWhereWithAggregatesInput = {
    AND?: InviteScalarWhereWithAggregatesInput | InviteScalarWhereWithAggregatesInput[]
    OR?: InviteScalarWhereWithAggregatesInput[]
    NOT?: InviteScalarWhereWithAggregatesInput | InviteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Invite"> | string
    tenantId?: StringWithAggregatesFilter<"Invite"> | string
    email?: StringWithAggregatesFilter<"Invite"> | string
    role?: EnumRoleWithAggregatesFilter<"Invite"> | $Enums.Role
    token?: StringWithAggregatesFilter<"Invite"> | string
    status?: EnumInviteStatusWithAggregatesFilter<"Invite"> | $Enums.InviteStatus
    expiresAt?: DateTimeWithAggregatesFilter<"Invite"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Invite"> | Date | string
  }
  export type ProjectMemberWhereInput = {
    AND?: ProjectMemberWhereInput | ProjectMemberWhereInput[]
    OR?: ProjectMemberWhereInput[]
    NOT?: ProjectMemberWhereInput | ProjectMemberWhereInput[]
    id?: StringFilter<"ProjectMember"> | string
    tenantId?: StringFilter<"ProjectMember"> | string
    userId?: StringFilter<"ProjectMember"> | string
    projectId?: StringFilter<"ProjectMember"> | string
    role?: EnumRoleFilter<"ProjectMember"> | $Enums.Role
    createdAt?: DateTimeFilter<"ProjectMember"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }
  export type ProjectMemberOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    project?: ProjectOrderByWithRelationInput
    _relevance?: ProjectMemberOrderByRelevanceInput
  }
  export type ProjectMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    projectId_userId?: ProjectMemberProjectIdUserIdCompoundUniqueInput
    AND?: ProjectMemberWhereInput | ProjectMemberWhereInput[]
    OR?: ProjectMemberWhereInput[]
    NOT?: ProjectMemberWhereInput | ProjectMemberWhereInput[]
    tenantId?: StringFilter<"ProjectMember"> | string
    userId?: StringFilter<"ProjectMember"> | string
    projectId?: StringFilter<"ProjectMember"> | string
    role?: EnumRoleFilter<"ProjectMember"> | $Enums.Role
    createdAt?: DateTimeFilter<"ProjectMember"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id" | "projectId_userId">
  export type ProjectMemberOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: ProjectMemberCountOrderByAggregateInput
    _max?: ProjectMemberMaxOrderByAggregateInput
    _min?: ProjectMemberMinOrderByAggregateInput
  }
  export type ProjectMemberScalarWhereWithAggregatesInput = {
    AND?: ProjectMemberScalarWhereWithAggregatesInput | ProjectMemberScalarWhereWithAggregatesInput[]
    OR?: ProjectMemberScalarWhereWithAggregatesInput[]
    NOT?: ProjectMemberScalarWhereWithAggregatesInput | ProjectMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProjectMember"> | string
    tenantId?: StringWithAggregatesFilter<"ProjectMember"> | string
    userId?: StringWithAggregatesFilter<"ProjectMember"> | string
    projectId?: StringWithAggregatesFilter<"ProjectMember"> | string
    role?: EnumRoleWithAggregatesFilter<"ProjectMember"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"ProjectMember"> | Date | string
  }
  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    tenantId?: StringFilter<"AuditLog"> | string
    userId?: StringFilter<"AuditLog"> | string
    entityType?: EnumAuditEntityTypeFilter<"AuditLog"> | $Enums.AuditEntityType
    entityId?: StringFilter<"AuditLog"> | string
    action?: EnumAuditActionFilter<"AuditLog"> | $Enums.AuditAction
    changes?: JsonFilter<"AuditLog">
    timestamp?: DateTimeFilter<"AuditLog"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }
  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    userId?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    action?: SortOrder
    changes?: SortOrder
    timestamp?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    _relevance?: AuditLogOrderByRelevanceInput
  }
  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    tenantId?: StringFilter<"AuditLog"> | string
    userId?: StringFilter<"AuditLog"> | string
    entityType?: EnumAuditEntityTypeFilter<"AuditLog"> | $Enums.AuditEntityType
    entityId?: StringFilter<"AuditLog"> | string
    action?: EnumAuditActionFilter<"AuditLog"> | $Enums.AuditAction
    changes?: JsonFilter<"AuditLog">
    timestamp?: DateTimeFilter<"AuditLog"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">
  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    userId?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    action?: SortOrder
    changes?: SortOrder
    timestamp?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }
  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    tenantId?: StringWithAggregatesFilter<"AuditLog"> | string
    userId?: StringWithAggregatesFilter<"AuditLog"> | string
    entityType?: EnumAuditEntityTypeWithAggregatesFilter<"AuditLog"> | $Enums.AuditEntityType
    entityId?: StringWithAggregatesFilter<"AuditLog"> | string
    action?: EnumAuditActionWithAggregatesFilter<"AuditLog"> | $Enums.AuditAction
    changes?: JsonWithAggregatesFilter<"AuditLog">
    timestamp?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }
  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    tenantId?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    message?: StringFilter<"Notification"> | string
    link?: StringNullableFilter<"Notification"> | string | null
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }
  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    link?: SortOrderInput | SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    _relevance?: NotificationOrderByRelevanceInput
  }
  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    tenantId?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    message?: StringFilter<"Notification"> | string
    link?: StringNullableFilter<"Notification"> | string | null
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">
  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    link?: SortOrderInput | SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }
  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    tenantId?: StringWithAggregatesFilter<"Notification"> | string
    userId?: StringWithAggregatesFilter<"Notification"> | string
    type?: EnumNotificationTypeWithAggregatesFilter<"Notification"> | $Enums.NotificationType
    message?: StringWithAggregatesFilter<"Notification"> | string
    link?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    isRead?: BoolWithAggregatesFilter<"Notification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }
  export type EmailVerificationWhereInput = {
    AND?: EmailVerificationWhereInput | EmailVerificationWhereInput[]
    OR?: EmailVerificationWhereInput[]
    NOT?: EmailVerificationWhereInput | EmailVerificationWhereInput[]
    id?: StringFilter<"EmailVerification"> | string
    userId?: StringFilter<"EmailVerification"> | string
    token?: StringFilter<"EmailVerification"> | string
    expiresAt?: DateTimeFilter<"EmailVerification"> | Date | string
    createdAt?: DateTimeFilter<"EmailVerification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }
  export type EmailVerificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: EmailVerificationOrderByRelevanceInput
  }
  export type EmailVerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: EmailVerificationWhereInput | EmailVerificationWhereInput[]
    OR?: EmailVerificationWhereInput[]
    NOT?: EmailVerificationWhereInput | EmailVerificationWhereInput[]
    userId?: StringFilter<"EmailVerification"> | string
    expiresAt?: DateTimeFilter<"EmailVerification"> | Date | string
    createdAt?: DateTimeFilter<"EmailVerification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">
  export type EmailVerificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: EmailVerificationCountOrderByAggregateInput
    _max?: EmailVerificationMaxOrderByAggregateInput
    _min?: EmailVerificationMinOrderByAggregateInput
  }
  export type EmailVerificationScalarWhereWithAggregatesInput = {
    AND?: EmailVerificationScalarWhereWithAggregatesInput | EmailVerificationScalarWhereWithAggregatesInput[]
    OR?: EmailVerificationScalarWhereWithAggregatesInput[]
    NOT?: EmailVerificationScalarWhereWithAggregatesInput | EmailVerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmailVerification"> | string
    userId?: StringWithAggregatesFilter<"EmailVerification"> | string
    token?: StringWithAggregatesFilter<"EmailVerification"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"EmailVerification"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"EmailVerification"> | Date | string
  }
  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role?: $Enums.Role
    isActive?: boolean
    isVerified?: boolean
    totpSecret?: string | null
    totpEnabled?: boolean
    avatarUrl?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutUsersInput
    createdProjects?: ProjectCreateNestedManyWithoutCreatorInput
    assignedTasks?: TaskCreateNestedManyWithoutAssigneeInput
    createdTasks?: TaskCreateNestedManyWithoutCreatorInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    projectMemberships?: ProjectMemberCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationCreateNestedManyWithoutUserInput
  }
  export type UserUncheckedCreateInput = {
    id?: string
    tenantId: string
    email: string
    passwordHash: string
    name: string
    role?: $Enums.Role
    isActive?: boolean
    isVerified?: boolean
    totpSecret?: string | null
    totpEnabled?: boolean
    avatarUrl?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdProjects?: ProjectUncheckedCreateNestedManyWithoutCreatorInput
    assignedTasks?: TaskUncheckedCreateNestedManyWithoutAssigneeInput
    createdTasks?: TaskUncheckedCreateNestedManyWithoutCreatorInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    projectMemberships?: ProjectMemberUncheckedCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationUncheckedCreateNestedManyWithoutUserInput
  }
  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    totpEnabled?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutUsersNestedInput
    createdProjects?: ProjectUpdateManyWithoutCreatorNestedInput
    assignedTasks?: TaskUpdateManyWithoutAssigneeNestedInput
    createdTasks?: TaskUpdateManyWithoutCreatorNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    projectMemberships?: ProjectMemberUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationUpdateManyWithoutUserNestedInput
  }
  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    totpEnabled?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdProjects?: ProjectUncheckedUpdateManyWithoutCreatorNestedInput
    assignedTasks?: TaskUncheckedUpdateManyWithoutAssigneeNestedInput
    createdTasks?: TaskUncheckedUpdateManyWithoutCreatorNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    projectMemberships?: ProjectMemberUncheckedUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationUncheckedUpdateManyWithoutUserNestedInput
  }
  export type UserCreateManyInput = {
    id?: string
    tenantId: string
    email: string
    passwordHash: string
    name: string
    role?: $Enums.Role
    isActive?: boolean
    isVerified?: boolean
    totpSecret?: string | null
    totpEnabled?: boolean
    avatarUrl?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }
  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    totpEnabled?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    totpEnabled?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type TenantCreateInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutTenantInput
    projects?: ProjectCreateNestedManyWithoutTenantInput
    tasks?: TaskCreateNestedManyWithoutTenantInput
    invites?: InviteCreateNestedManyWithoutTenantInput
    comments?: CommentCreateNestedManyWithoutTenantInput
    notifications?: NotificationCreateNestedManyWithoutTenantInput
    auditLogs?: AuditLogCreateNestedManyWithoutTenantInput
    projectMembers?: ProjectMemberCreateNestedManyWithoutTenantInput
  }
  export type TenantUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
    projects?: ProjectUncheckedCreateNestedManyWithoutTenantInput
    tasks?: TaskUncheckedCreateNestedManyWithoutTenantInput
    invites?: InviteUncheckedCreateNestedManyWithoutTenantInput
    comments?: CommentUncheckedCreateNestedManyWithoutTenantInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutTenantInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutTenantInput
    projectMembers?: ProjectMemberUncheckedCreateNestedManyWithoutTenantInput
  }
  export type TenantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutTenantNestedInput
    projects?: ProjectUpdateManyWithoutTenantNestedInput
    tasks?: TaskUpdateManyWithoutTenantNestedInput
    invites?: InviteUpdateManyWithoutTenantNestedInput
    comments?: CommentUpdateManyWithoutTenantNestedInput
    notifications?: NotificationUpdateManyWithoutTenantNestedInput
    auditLogs?: AuditLogUpdateManyWithoutTenantNestedInput
    projectMembers?: ProjectMemberUpdateManyWithoutTenantNestedInput
  }
  export type TenantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutTenantNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutTenantNestedInput
    invites?: InviteUncheckedUpdateManyWithoutTenantNestedInput
    comments?: CommentUncheckedUpdateManyWithoutTenantNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutTenantNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutTenantNestedInput
    projectMembers?: ProjectMemberUncheckedUpdateManyWithoutTenantNestedInput
  }
  export type TenantCreateManyInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }
  export type TenantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type TenantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type RefreshTokenCreateInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutRefreshTokensInput
  }
  export type RefreshTokenUncheckedCreateInput = {
    id?: string
    token: string
    expiresAt: Date | string
    userId: string
    createdAt?: Date | string
  }
  export type RefreshTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRefreshTokensNestedInput
  }
  export type RefreshTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type RefreshTokenCreateManyInput = {
    id?: string
    token: string
    expiresAt: Date | string
    userId: string
    createdAt?: Date | string
  }
  export type RefreshTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type RefreshTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type ProjectCreateInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.ProjectStatus
    startDate?: Date | string | null
    endDate?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutProjectsInput
    creator: UserCreateNestedOneWithoutCreatedProjectsInput
    tasks?: TaskCreateNestedManyWithoutProjectInput
    comments?: CommentCreateNestedManyWithoutProjectInput
    members?: ProjectMemberCreateNestedManyWithoutProjectInput
  }
  export type ProjectUncheckedCreateInput = {
    id?: string
    tenantId: string
    name: string
    description?: string | null
    status?: $Enums.ProjectStatus
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdBy: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput
    comments?: CommentUncheckedCreateNestedManyWithoutProjectInput
    members?: ProjectMemberUncheckedCreateNestedManyWithoutProjectInput
  }
  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutProjectsNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedProjectsNestedInput
    tasks?: TaskUpdateManyWithoutProjectNestedInput
    comments?: CommentUpdateManyWithoutProjectNestedInput
    members?: ProjectMemberUpdateManyWithoutProjectNestedInput
  }
  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutProjectNestedInput
    comments?: CommentUncheckedUpdateManyWithoutProjectNestedInput
    members?: ProjectMemberUncheckedUpdateManyWithoutProjectNestedInput
  }
  export type ProjectCreateManyInput = {
    id?: string
    tenantId: string
    name: string
    description?: string | null
    status?: $Enums.ProjectStatus
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdBy: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }
  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type TaskCreateInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    dueDate?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutTasksInput
    project: ProjectCreateNestedOneWithoutTasksInput
    assignee?: UserCreateNestedOneWithoutAssignedTasksInput
    creator: UserCreateNestedOneWithoutCreatedTasksInput
  }
  export type TaskUncheckedCreateInput = {
    id?: string
    tenantId: string
    projectId: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    assigneeId?: string | null
    dueDate?: Date | string | null
    createdBy: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }
  export type TaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutTasksNestedInput
    project?: ProjectUpdateOneRequiredWithoutTasksNestedInput
    assignee?: UserUpdateOneWithoutAssignedTasksNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedTasksNestedInput
  }
  export type TaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type TaskCreateManyInput = {
    id?: string
    tenantId: string
    projectId: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    assigneeId?: string | null
    dueDate?: Date | string | null
    createdBy: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }
  export type TaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type TaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type CommentCreateInput = {
    id?: string
    text: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutCommentsInput
    project: ProjectCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutRepliesInput
    replies?: CommentCreateNestedManyWithoutParentInput
  }
  export type CommentUncheckedCreateInput = {
    id?: string
    tenantId: string
    projectId: string
    userId: string
    parentId?: string | null
    text: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
  }
  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutCommentsNestedInput
    project?: ProjectUpdateOneRequiredWithoutCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
    parent?: CommentUpdateOneWithoutRepliesNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
  }
  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    text?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
  }
  export type CommentCreateManyInput = {
    id?: string
    tenantId: string
    projectId: string
    userId: string
    parentId?: string | null
    text: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }
  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    text?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type InviteCreateInput = {
    id?: string
    email: string
    role?: $Enums.Role
    token: string
    status?: $Enums.InviteStatus
    expiresAt: Date | string
    createdAt?: Date | string
    tenant: TenantCreateNestedOneWithoutInvitesInput
  }
  export type InviteUncheckedCreateInput = {
    id?: string
    tenantId: string
    email: string
    role?: $Enums.Role
    token: string
    status?: $Enums.InviteStatus
    expiresAt: Date | string
    createdAt?: Date | string
  }
  export type InviteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    token?: StringFieldUpdateOperationsInput | string
    status?: EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutInvitesNestedInput
  }
  export type InviteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    token?: StringFieldUpdateOperationsInput | string
    status?: EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type InviteCreateManyInput = {
    id?: string
    tenantId: string
    email: string
    role?: $Enums.Role
    token: string
    status?: $Enums.InviteStatus
    expiresAt: Date | string
    createdAt?: Date | string
  }
  export type InviteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    token?: StringFieldUpdateOperationsInput | string
    status?: EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type InviteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    token?: StringFieldUpdateOperationsInput | string
    status?: EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type ProjectMemberCreateInput = {
    id?: string
    role?: $Enums.Role
    createdAt?: Date | string
    tenant: TenantCreateNestedOneWithoutProjectMembersInput
    user: UserCreateNestedOneWithoutProjectMembershipsInput
    project: ProjectCreateNestedOneWithoutMembersInput
  }
  export type ProjectMemberUncheckedCreateInput = {
    id?: string
    tenantId: string
    userId: string
    projectId: string
    role?: $Enums.Role
    createdAt?: Date | string
  }
  export type ProjectMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutProjectMembersNestedInput
    user?: UserUpdateOneRequiredWithoutProjectMembershipsNestedInput
    project?: ProjectUpdateOneRequiredWithoutMembersNestedInput
  }
  export type ProjectMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type ProjectMemberCreateManyInput = {
    id?: string
    tenantId: string
    userId: string
    projectId: string
    role?: $Enums.Role
    createdAt?: Date | string
  }
  export type ProjectMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type ProjectMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type AuditLogCreateInput = {
    id?: string
    entityType: $Enums.AuditEntityType
    entityId: string
    action: $Enums.AuditAction
    changes: JsonNullValueInput | InputJsonValue
    timestamp?: Date | string
    tenant: TenantCreateNestedOneWithoutAuditLogsInput
    user: UserCreateNestedOneWithoutAuditLogsInput
  }
  export type AuditLogUncheckedCreateInput = {
    id?: string
    tenantId: string
    userId: string
    entityType: $Enums.AuditEntityType
    entityId: string
    action: $Enums.AuditAction
    changes: JsonNullValueInput | InputJsonValue
    timestamp?: Date | string
  }
  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityType?: EnumAuditEntityTypeFieldUpdateOperationsInput | $Enums.AuditEntityType
    entityId?: StringFieldUpdateOperationsInput | string
    action?: EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction
    changes?: JsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutAuditLogsNestedInput
    user?: UserUpdateOneRequiredWithoutAuditLogsNestedInput
  }
  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    entityType?: EnumAuditEntityTypeFieldUpdateOperationsInput | $Enums.AuditEntityType
    entityId?: StringFieldUpdateOperationsInput | string
    action?: EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction
    changes?: JsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type AuditLogCreateManyInput = {
    id?: string
    tenantId: string
    userId: string
    entityType: $Enums.AuditEntityType
    entityId: string
    action: $Enums.AuditAction
    changes: JsonNullValueInput | InputJsonValue
    timestamp?: Date | string
  }
  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityType?: EnumAuditEntityTypeFieldUpdateOperationsInput | $Enums.AuditEntityType
    entityId?: StringFieldUpdateOperationsInput | string
    action?: EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction
    changes?: JsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    entityType?: EnumAuditEntityTypeFieldUpdateOperationsInput | $Enums.AuditEntityType
    entityId?: StringFieldUpdateOperationsInput | string
    action?: EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction
    changes?: JsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type NotificationCreateInput = {
    id?: string
    type: $Enums.NotificationType
    message: string
    link?: string | null
    isRead?: boolean
    createdAt?: Date | string
    tenant: TenantCreateNestedOneWithoutNotificationsInput
    user: UserCreateNestedOneWithoutNotificationsInput
  }
  export type NotificationUncheckedCreateInput = {
    id?: string
    tenantId: string
    userId: string
    type: $Enums.NotificationType
    message: string
    link?: string | null
    isRead?: boolean
    createdAt?: Date | string
  }
  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutNotificationsNestedInput
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }
  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type NotificationCreateManyInput = {
    id?: string
    tenantId: string
    userId: string
    type: $Enums.NotificationType
    message: string
    link?: string | null
    isRead?: boolean
    createdAt?: Date | string
  }
  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type EmailVerificationCreateInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutEmailVerificationsInput
  }
  export type EmailVerificationUncheckedCreateInput = {
    id?: string
    userId: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }
  export type EmailVerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEmailVerificationsNestedInput
  }
  export type EmailVerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type EmailVerificationCreateManyInput = {
    id?: string
    userId: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }
  export type EmailVerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type EmailVerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }
  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }
  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }
  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }
  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }
  export type TenantScalarRelationFilter = {
    is?: TenantWhereInput
    isNot?: TenantWhereInput
  }
  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }
  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }
  export type RefreshTokenListRelationFilter = {
    every?: RefreshTokenWhereInput
    some?: RefreshTokenWhereInput
    none?: RefreshTokenWhereInput
  }
  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }
  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }
  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }
  export type ProjectMemberListRelationFilter = {
    every?: ProjectMemberWhereInput
    some?: ProjectMemberWhereInput
    none?: ProjectMemberWhereInput
  }
  export type EmailVerificationListRelationFilter = {
    every?: EmailVerificationWhereInput
    some?: EmailVerificationWhereInput
    none?: EmailVerificationWhereInput
  }
  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }
  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }
  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }
  export type RefreshTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }
  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }
  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }
  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }
  export type ProjectMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }
  export type EmailVerificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }
  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }
  export type UserTenantIdEmailCompoundUniqueInput = {
    tenantId: string
    email: string
  }
  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    isVerified?: SortOrder
    totpSecret?: SortOrder
    totpEnabled?: SortOrder
    avatarUrl?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    isVerified?: SortOrder
    totpSecret?: SortOrder
    totpEnabled?: SortOrder
    avatarUrl?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    isVerified?: SortOrder
    totpSecret?: SortOrder
    totpEnabled?: SortOrder
    avatarUrl?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }
  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }
  export type InviteListRelationFilter = {
    every?: InviteWhereInput
    some?: InviteWhereInput
    none?: InviteWhereInput
  }
  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }
  export type InviteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }
  export type TenantOrderByRelevanceInput = {
    fields: TenantOrderByRelevanceFieldEnum | TenantOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }
  export type TenantCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type TenantMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type TenantMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }
  export type RefreshTokenOrderByRelevanceInput = {
    fields: RefreshTokenOrderByRelevanceFieldEnum | RefreshTokenOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }
  export type RefreshTokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }
  export type RefreshTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }
  export type RefreshTokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }
  export type EnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[]
    notIn?: $Enums.ProjectStatus[]
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus
  }
  export type ProjectOrderByRelevanceInput = {
    fields: ProjectOrderByRelevanceFieldEnum | ProjectOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }
  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdBy?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdBy?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdBy?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type EnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[]
    notIn?: $Enums.ProjectStatus[]
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectStatusFilter<$PrismaModel>
  }
  export type EnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[]
    notIn?: $Enums.TaskStatus[]
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }
  export type EnumTaskPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskPriority | EnumTaskPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TaskPriority[]
    notIn?: $Enums.TaskPriority[]
    not?: NestedEnumTaskPriorityFilter<$PrismaModel> | $Enums.TaskPriority
  }
  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }
  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }
  export type TaskOrderByRelevanceInput = {
    fields: TaskOrderByRelevanceFieldEnum | TaskOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }
  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    projectId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    assigneeId?: SortOrder
    dueDate?: SortOrder
    createdBy?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    projectId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    assigneeId?: SortOrder
    dueDate?: SortOrder
    createdBy?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    projectId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    assigneeId?: SortOrder
    dueDate?: SortOrder
    createdBy?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type EnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[]
    notIn?: $Enums.TaskStatus[]
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }
  export type EnumTaskPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskPriority | EnumTaskPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TaskPriority[]
    notIn?: $Enums.TaskPriority[]
    not?: NestedEnumTaskPriorityWithAggregatesFilter<$PrismaModel> | $Enums.TaskPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskPriorityFilter<$PrismaModel>
    _max?: NestedEnumTaskPriorityFilter<$PrismaModel>
  }
  export type CommentNullableScalarRelationFilter = {
    is?: CommentWhereInput | null
    isNot?: CommentWhereInput | null
  }
  export type CommentOrderByRelevanceInput = {
    fields: CommentOrderByRelevanceFieldEnum | CommentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }
  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    parentId?: SortOrder
    text?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    parentId?: SortOrder
    text?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    parentId?: SortOrder
    text?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type EnumInviteStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InviteStatus | EnumInviteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InviteStatus[]
    notIn?: $Enums.InviteStatus[]
    not?: NestedEnumInviteStatusFilter<$PrismaModel> | $Enums.InviteStatus
  }
  export type InviteOrderByRelevanceInput = {
    fields: InviteOrderByRelevanceFieldEnum | InviteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }
  export type InviteCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    email?: SortOrder
    role?: SortOrder
    token?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }
  export type InviteMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    email?: SortOrder
    role?: SortOrder
    token?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }
  export type InviteMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    email?: SortOrder
    role?: SortOrder
    token?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }
  export type EnumInviteStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InviteStatus | EnumInviteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InviteStatus[]
    notIn?: $Enums.InviteStatus[]
    not?: NestedEnumInviteStatusWithAggregatesFilter<$PrismaModel> | $Enums.InviteStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInviteStatusFilter<$PrismaModel>
    _max?: NestedEnumInviteStatusFilter<$PrismaModel>
  }
  export type ProjectMemberOrderByRelevanceInput = {
    fields: ProjectMemberOrderByRelevanceFieldEnum | ProjectMemberOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }
  export type ProjectMemberProjectIdUserIdCompoundUniqueInput = {
    projectId: string
    userId: string
  }
  export type ProjectMemberCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }
  export type ProjectMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }
  export type ProjectMemberMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }
  export type EnumAuditEntityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditEntityType | EnumAuditEntityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AuditEntityType[]
    notIn?: $Enums.AuditEntityType[]
    not?: NestedEnumAuditEntityTypeFilter<$PrismaModel> | $Enums.AuditEntityType
  }
  export type EnumAuditActionFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditAction | EnumAuditActionFieldRefInput<$PrismaModel>
    in?: $Enums.AuditAction[]
    notIn?: $Enums.AuditAction[]
    not?: NestedEnumAuditActionFilter<$PrismaModel> | $Enums.AuditAction
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>
  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type AuditLogOrderByRelevanceInput = {
    fields: AuditLogOrderByRelevanceFieldEnum | AuditLogOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }
  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    userId?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    action?: SortOrder
    changes?: SortOrder
    timestamp?: SortOrder
  }
  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    userId?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    action?: SortOrder
    timestamp?: SortOrder
  }
  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    userId?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    action?: SortOrder
    timestamp?: SortOrder
  }
  export type EnumAuditEntityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditEntityType | EnumAuditEntityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AuditEntityType[]
    notIn?: $Enums.AuditEntityType[]
    not?: NestedEnumAuditEntityTypeWithAggregatesFilter<$PrismaModel> | $Enums.AuditEntityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuditEntityTypeFilter<$PrismaModel>
    _max?: NestedEnumAuditEntityTypeFilter<$PrismaModel>
  }
  export type EnumAuditActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditAction | EnumAuditActionFieldRefInput<$PrismaModel>
    in?: $Enums.AuditAction[]
    notIn?: $Enums.AuditAction[]
    not?: NestedEnumAuditActionWithAggregatesFilter<$PrismaModel> | $Enums.AuditAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuditActionFilter<$PrismaModel>
    _max?: NestedEnumAuditActionFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>
  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }
  export type EnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[]
    notIn?: $Enums.NotificationType[]
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }
  export type NotificationOrderByRelevanceInput = {
    fields: NotificationOrderByRelevanceFieldEnum | NotificationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }
  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    link?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }
  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    link?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }
  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    link?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }
  export type EnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[]
    notIn?: $Enums.NotificationType[]
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }
  export type EmailVerificationOrderByRelevanceInput = {
    fields: EmailVerificationOrderByRelevanceFieldEnum | EmailVerificationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }
  export type EmailVerificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }
  export type EmailVerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }
  export type EmailVerificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }
  export type TenantCreateNestedOneWithoutUsersInput = {
    create?: XOR<TenantCreateWithoutUsersInput, TenantUncheckedCreateWithoutUsersInput>
    connectOrCreate?: TenantCreateOrConnectWithoutUsersInput
    connect?: TenantWhereUniqueInput
  }
  export type ProjectCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ProjectCreateWithoutCreatorInput, ProjectUncheckedCreateWithoutCreatorInput> | ProjectCreateWithoutCreatorInput[] | ProjectUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCreatorInput | ProjectCreateOrConnectWithoutCreatorInput[]
    createMany?: ProjectCreateManyCreatorInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }
  export type TaskCreateNestedManyWithoutAssigneeInput = {
    create?: XOR<TaskCreateWithoutAssigneeInput, TaskUncheckedCreateWithoutAssigneeInput> | TaskCreateWithoutAssigneeInput[] | TaskUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssigneeInput | TaskCreateOrConnectWithoutAssigneeInput[]
    createMany?: TaskCreateManyAssigneeInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }
  export type TaskCreateNestedManyWithoutCreatorInput = {
    create?: XOR<TaskCreateWithoutCreatorInput, TaskUncheckedCreateWithoutCreatorInput> | TaskCreateWithoutCreatorInput[] | TaskUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCreatorInput | TaskCreateOrConnectWithoutCreatorInput[]
    createMany?: TaskCreateManyCreatorInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }
  export type RefreshTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }
  export type CommentCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }
  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }
  export type AuditLogCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }
  export type ProjectMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectMemberCreateWithoutUserInput, ProjectMemberUncheckedCreateWithoutUserInput> | ProjectMemberCreateWithoutUserInput[] | ProjectMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutUserInput | ProjectMemberCreateOrConnectWithoutUserInput[]
    createMany?: ProjectMemberCreateManyUserInputEnvelope
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
  }
  export type EmailVerificationCreateNestedManyWithoutUserInput = {
    create?: XOR<EmailVerificationCreateWithoutUserInput, EmailVerificationUncheckedCreateWithoutUserInput> | EmailVerificationCreateWithoutUserInput[] | EmailVerificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailVerificationCreateOrConnectWithoutUserInput | EmailVerificationCreateOrConnectWithoutUserInput[]
    createMany?: EmailVerificationCreateManyUserInputEnvelope
    connect?: EmailVerificationWhereUniqueInput | EmailVerificationWhereUniqueInput[]
  }
  export type ProjectUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ProjectCreateWithoutCreatorInput, ProjectUncheckedCreateWithoutCreatorInput> | ProjectCreateWithoutCreatorInput[] | ProjectUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCreatorInput | ProjectCreateOrConnectWithoutCreatorInput[]
    createMany?: ProjectCreateManyCreatorInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }
  export type TaskUncheckedCreateNestedManyWithoutAssigneeInput = {
    create?: XOR<TaskCreateWithoutAssigneeInput, TaskUncheckedCreateWithoutAssigneeInput> | TaskCreateWithoutAssigneeInput[] | TaskUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssigneeInput | TaskCreateOrConnectWithoutAssigneeInput[]
    createMany?: TaskCreateManyAssigneeInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }
  export type TaskUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<TaskCreateWithoutCreatorInput, TaskUncheckedCreateWithoutCreatorInput> | TaskCreateWithoutCreatorInput[] | TaskUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCreatorInput | TaskCreateOrConnectWithoutCreatorInput[]
    createMany?: TaskCreateManyCreatorInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }
  export type RefreshTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }
  export type CommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }
  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }
  export type AuditLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }
  export type ProjectMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectMemberCreateWithoutUserInput, ProjectMemberUncheckedCreateWithoutUserInput> | ProjectMemberCreateWithoutUserInput[] | ProjectMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutUserInput | ProjectMemberCreateOrConnectWithoutUserInput[]
    createMany?: ProjectMemberCreateManyUserInputEnvelope
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
  }
  export type EmailVerificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EmailVerificationCreateWithoutUserInput, EmailVerificationUncheckedCreateWithoutUserInput> | EmailVerificationCreateWithoutUserInput[] | EmailVerificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailVerificationCreateOrConnectWithoutUserInput | EmailVerificationCreateOrConnectWithoutUserInput[]
    createMany?: EmailVerificationCreateManyUserInputEnvelope
    connect?: EmailVerificationWhereUniqueInput | EmailVerificationWhereUniqueInput[]
  }
  export type StringFieldUpdateOperationsInput = {
    set?: string
  }
  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }
  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }
  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }
  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }
  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }
  export type TenantUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<TenantCreateWithoutUsersInput, TenantUncheckedCreateWithoutUsersInput>
    connectOrCreate?: TenantCreateOrConnectWithoutUsersInput
    upsert?: TenantUpsertWithoutUsersInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutUsersInput, TenantUpdateWithoutUsersInput>, TenantUncheckedUpdateWithoutUsersInput>
  }
  export type ProjectUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ProjectCreateWithoutCreatorInput, ProjectUncheckedCreateWithoutCreatorInput> | ProjectCreateWithoutCreatorInput[] | ProjectUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCreatorInput | ProjectCreateOrConnectWithoutCreatorInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutCreatorInput | ProjectUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ProjectCreateManyCreatorInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutCreatorInput | ProjectUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutCreatorInput | ProjectUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }
  export type TaskUpdateManyWithoutAssigneeNestedInput = {
    create?: XOR<TaskCreateWithoutAssigneeInput, TaskUncheckedCreateWithoutAssigneeInput> | TaskCreateWithoutAssigneeInput[] | TaskUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssigneeInput | TaskCreateOrConnectWithoutAssigneeInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutAssigneeInput | TaskUpsertWithWhereUniqueWithoutAssigneeInput[]
    createMany?: TaskCreateManyAssigneeInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutAssigneeInput | TaskUpdateWithWhereUniqueWithoutAssigneeInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutAssigneeInput | TaskUpdateManyWithWhereWithoutAssigneeInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }
  export type TaskUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<TaskCreateWithoutCreatorInput, TaskUncheckedCreateWithoutCreatorInput> | TaskCreateWithoutCreatorInput[] | TaskUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCreatorInput | TaskCreateOrConnectWithoutCreatorInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutCreatorInput | TaskUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: TaskCreateManyCreatorInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutCreatorInput | TaskUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutCreatorInput | TaskUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }
  export type RefreshTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }
  export type CommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }
  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }
  export type AuditLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }
  export type ProjectMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectMemberCreateWithoutUserInput, ProjectMemberUncheckedCreateWithoutUserInput> | ProjectMemberCreateWithoutUserInput[] | ProjectMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutUserInput | ProjectMemberCreateOrConnectWithoutUserInput[]
    upsert?: ProjectMemberUpsertWithWhereUniqueWithoutUserInput | ProjectMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectMemberCreateManyUserInputEnvelope
    set?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    disconnect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    delete?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    update?: ProjectMemberUpdateWithWhereUniqueWithoutUserInput | ProjectMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectMemberUpdateManyWithWhereWithoutUserInput | ProjectMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectMemberScalarWhereInput | ProjectMemberScalarWhereInput[]
  }
  export type EmailVerificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmailVerificationCreateWithoutUserInput, EmailVerificationUncheckedCreateWithoutUserInput> | EmailVerificationCreateWithoutUserInput[] | EmailVerificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailVerificationCreateOrConnectWithoutUserInput | EmailVerificationCreateOrConnectWithoutUserInput[]
    upsert?: EmailVerificationUpsertWithWhereUniqueWithoutUserInput | EmailVerificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmailVerificationCreateManyUserInputEnvelope
    set?: EmailVerificationWhereUniqueInput | EmailVerificationWhereUniqueInput[]
    disconnect?: EmailVerificationWhereUniqueInput | EmailVerificationWhereUniqueInput[]
    delete?: EmailVerificationWhereUniqueInput | EmailVerificationWhereUniqueInput[]
    connect?: EmailVerificationWhereUniqueInput | EmailVerificationWhereUniqueInput[]
    update?: EmailVerificationUpdateWithWhereUniqueWithoutUserInput | EmailVerificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmailVerificationUpdateManyWithWhereWithoutUserInput | EmailVerificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmailVerificationScalarWhereInput | EmailVerificationScalarWhereInput[]
  }
  export type ProjectUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ProjectCreateWithoutCreatorInput, ProjectUncheckedCreateWithoutCreatorInput> | ProjectCreateWithoutCreatorInput[] | ProjectUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCreatorInput | ProjectCreateOrConnectWithoutCreatorInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutCreatorInput | ProjectUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ProjectCreateManyCreatorInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutCreatorInput | ProjectUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutCreatorInput | ProjectUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }
  export type TaskUncheckedUpdateManyWithoutAssigneeNestedInput = {
    create?: XOR<TaskCreateWithoutAssigneeInput, TaskUncheckedCreateWithoutAssigneeInput> | TaskCreateWithoutAssigneeInput[] | TaskUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssigneeInput | TaskCreateOrConnectWithoutAssigneeInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutAssigneeInput | TaskUpsertWithWhereUniqueWithoutAssigneeInput[]
    createMany?: TaskCreateManyAssigneeInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutAssigneeInput | TaskUpdateWithWhereUniqueWithoutAssigneeInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutAssigneeInput | TaskUpdateManyWithWhereWithoutAssigneeInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }
  export type TaskUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<TaskCreateWithoutCreatorInput, TaskUncheckedCreateWithoutCreatorInput> | TaskCreateWithoutCreatorInput[] | TaskUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCreatorInput | TaskCreateOrConnectWithoutCreatorInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutCreatorInput | TaskUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: TaskCreateManyCreatorInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutCreatorInput | TaskUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutCreatorInput | TaskUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }
  export type RefreshTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }
  export type CommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }
  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }
  export type AuditLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }
  export type ProjectMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectMemberCreateWithoutUserInput, ProjectMemberUncheckedCreateWithoutUserInput> | ProjectMemberCreateWithoutUserInput[] | ProjectMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutUserInput | ProjectMemberCreateOrConnectWithoutUserInput[]
    upsert?: ProjectMemberUpsertWithWhereUniqueWithoutUserInput | ProjectMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectMemberCreateManyUserInputEnvelope
    set?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    disconnect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    delete?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    update?: ProjectMemberUpdateWithWhereUniqueWithoutUserInput | ProjectMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectMemberUpdateManyWithWhereWithoutUserInput | ProjectMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectMemberScalarWhereInput | ProjectMemberScalarWhereInput[]
  }
  export type EmailVerificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmailVerificationCreateWithoutUserInput, EmailVerificationUncheckedCreateWithoutUserInput> | EmailVerificationCreateWithoutUserInput[] | EmailVerificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailVerificationCreateOrConnectWithoutUserInput | EmailVerificationCreateOrConnectWithoutUserInput[]
    upsert?: EmailVerificationUpsertWithWhereUniqueWithoutUserInput | EmailVerificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmailVerificationCreateManyUserInputEnvelope
    set?: EmailVerificationWhereUniqueInput | EmailVerificationWhereUniqueInput[]
    disconnect?: EmailVerificationWhereUniqueInput | EmailVerificationWhereUniqueInput[]
    delete?: EmailVerificationWhereUniqueInput | EmailVerificationWhereUniqueInput[]
    connect?: EmailVerificationWhereUniqueInput | EmailVerificationWhereUniqueInput[]
    update?: EmailVerificationUpdateWithWhereUniqueWithoutUserInput | EmailVerificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmailVerificationUpdateManyWithWhereWithoutUserInput | EmailVerificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmailVerificationScalarWhereInput | EmailVerificationScalarWhereInput[]
  }
  export type UserCreateNestedManyWithoutTenantInput = {
    create?: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput> | UserCreateWithoutTenantInput[] | UserUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTenantInput | UserCreateOrConnectWithoutTenantInput[]
    createMany?: UserCreateManyTenantInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }
  export type ProjectCreateNestedManyWithoutTenantInput = {
    create?: XOR<ProjectCreateWithoutTenantInput, ProjectUncheckedCreateWithoutTenantInput> | ProjectCreateWithoutTenantInput[] | ProjectUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutTenantInput | ProjectCreateOrConnectWithoutTenantInput[]
    createMany?: ProjectCreateManyTenantInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }
  export type TaskCreateNestedManyWithoutTenantInput = {
    create?: XOR<TaskCreateWithoutTenantInput, TaskUncheckedCreateWithoutTenantInput> | TaskCreateWithoutTenantInput[] | TaskUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutTenantInput | TaskCreateOrConnectWithoutTenantInput[]
    createMany?: TaskCreateManyTenantInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }
  export type InviteCreateNestedManyWithoutTenantInput = {
    create?: XOR<InviteCreateWithoutTenantInput, InviteUncheckedCreateWithoutTenantInput> | InviteCreateWithoutTenantInput[] | InviteUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: InviteCreateOrConnectWithoutTenantInput | InviteCreateOrConnectWithoutTenantInput[]
    createMany?: InviteCreateManyTenantInputEnvelope
    connect?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
  }
  export type CommentCreateNestedManyWithoutTenantInput = {
    create?: XOR<CommentCreateWithoutTenantInput, CommentUncheckedCreateWithoutTenantInput> | CommentCreateWithoutTenantInput[] | CommentUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutTenantInput | CommentCreateOrConnectWithoutTenantInput[]
    createMany?: CommentCreateManyTenantInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }
  export type NotificationCreateNestedManyWithoutTenantInput = {
    create?: XOR<NotificationCreateWithoutTenantInput, NotificationUncheckedCreateWithoutTenantInput> | NotificationCreateWithoutTenantInput[] | NotificationUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutTenantInput | NotificationCreateOrConnectWithoutTenantInput[]
    createMany?: NotificationCreateManyTenantInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }
  export type AuditLogCreateNestedManyWithoutTenantInput = {
    create?: XOR<AuditLogCreateWithoutTenantInput, AuditLogUncheckedCreateWithoutTenantInput> | AuditLogCreateWithoutTenantInput[] | AuditLogUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutTenantInput | AuditLogCreateOrConnectWithoutTenantInput[]
    createMany?: AuditLogCreateManyTenantInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }
  export type ProjectMemberCreateNestedManyWithoutTenantInput = {
    create?: XOR<ProjectMemberCreateWithoutTenantInput, ProjectMemberUncheckedCreateWithoutTenantInput> | ProjectMemberCreateWithoutTenantInput[] | ProjectMemberUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutTenantInput | ProjectMemberCreateOrConnectWithoutTenantInput[]
    createMany?: ProjectMemberCreateManyTenantInputEnvelope
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
  }
  export type UserUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput> | UserCreateWithoutTenantInput[] | UserUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTenantInput | UserCreateOrConnectWithoutTenantInput[]
    createMany?: UserCreateManyTenantInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }
  export type ProjectUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<ProjectCreateWithoutTenantInput, ProjectUncheckedCreateWithoutTenantInput> | ProjectCreateWithoutTenantInput[] | ProjectUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutTenantInput | ProjectCreateOrConnectWithoutTenantInput[]
    createMany?: ProjectCreateManyTenantInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }
  export type TaskUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<TaskCreateWithoutTenantInput, TaskUncheckedCreateWithoutTenantInput> | TaskCreateWithoutTenantInput[] | TaskUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutTenantInput | TaskCreateOrConnectWithoutTenantInput[]
    createMany?: TaskCreateManyTenantInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }
  export type InviteUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<InviteCreateWithoutTenantInput, InviteUncheckedCreateWithoutTenantInput> | InviteCreateWithoutTenantInput[] | InviteUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: InviteCreateOrConnectWithoutTenantInput | InviteCreateOrConnectWithoutTenantInput[]
    createMany?: InviteCreateManyTenantInputEnvelope
    connect?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
  }
  export type CommentUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<CommentCreateWithoutTenantInput, CommentUncheckedCreateWithoutTenantInput> | CommentCreateWithoutTenantInput[] | CommentUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutTenantInput | CommentCreateOrConnectWithoutTenantInput[]
    createMany?: CommentCreateManyTenantInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }
  export type NotificationUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<NotificationCreateWithoutTenantInput, NotificationUncheckedCreateWithoutTenantInput> | NotificationCreateWithoutTenantInput[] | NotificationUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutTenantInput | NotificationCreateOrConnectWithoutTenantInput[]
    createMany?: NotificationCreateManyTenantInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }
  export type AuditLogUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<AuditLogCreateWithoutTenantInput, AuditLogUncheckedCreateWithoutTenantInput> | AuditLogCreateWithoutTenantInput[] | AuditLogUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutTenantInput | AuditLogCreateOrConnectWithoutTenantInput[]
    createMany?: AuditLogCreateManyTenantInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }
  export type ProjectMemberUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<ProjectMemberCreateWithoutTenantInput, ProjectMemberUncheckedCreateWithoutTenantInput> | ProjectMemberCreateWithoutTenantInput[] | ProjectMemberUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutTenantInput | ProjectMemberCreateOrConnectWithoutTenantInput[]
    createMany?: ProjectMemberCreateManyTenantInputEnvelope
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
  }
  export type UserUpdateManyWithoutTenantNestedInput = {
    create?: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput> | UserCreateWithoutTenantInput[] | UserUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTenantInput | UserCreateOrConnectWithoutTenantInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTenantInput | UserUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: UserCreateManyTenantInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTenantInput | UserUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTenantInput | UserUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }
  export type ProjectUpdateManyWithoutTenantNestedInput = {
    create?: XOR<ProjectCreateWithoutTenantInput, ProjectUncheckedCreateWithoutTenantInput> | ProjectCreateWithoutTenantInput[] | ProjectUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutTenantInput | ProjectCreateOrConnectWithoutTenantInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutTenantInput | ProjectUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: ProjectCreateManyTenantInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutTenantInput | ProjectUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutTenantInput | ProjectUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }
  export type TaskUpdateManyWithoutTenantNestedInput = {
    create?: XOR<TaskCreateWithoutTenantInput, TaskUncheckedCreateWithoutTenantInput> | TaskCreateWithoutTenantInput[] | TaskUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutTenantInput | TaskCreateOrConnectWithoutTenantInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutTenantInput | TaskUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: TaskCreateManyTenantInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutTenantInput | TaskUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutTenantInput | TaskUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }
  export type InviteUpdateManyWithoutTenantNestedInput = {
    create?: XOR<InviteCreateWithoutTenantInput, InviteUncheckedCreateWithoutTenantInput> | InviteCreateWithoutTenantInput[] | InviteUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: InviteCreateOrConnectWithoutTenantInput | InviteCreateOrConnectWithoutTenantInput[]
    upsert?: InviteUpsertWithWhereUniqueWithoutTenantInput | InviteUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: InviteCreateManyTenantInputEnvelope
    set?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    disconnect?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    delete?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    connect?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    update?: InviteUpdateWithWhereUniqueWithoutTenantInput | InviteUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: InviteUpdateManyWithWhereWithoutTenantInput | InviteUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: InviteScalarWhereInput | InviteScalarWhereInput[]
  }
  export type CommentUpdateManyWithoutTenantNestedInput = {
    create?: XOR<CommentCreateWithoutTenantInput, CommentUncheckedCreateWithoutTenantInput> | CommentCreateWithoutTenantInput[] | CommentUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutTenantInput | CommentCreateOrConnectWithoutTenantInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutTenantInput | CommentUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: CommentCreateManyTenantInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutTenantInput | CommentUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutTenantInput | CommentUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }
  export type NotificationUpdateManyWithoutTenantNestedInput = {
    create?: XOR<NotificationCreateWithoutTenantInput, NotificationUncheckedCreateWithoutTenantInput> | NotificationCreateWithoutTenantInput[] | NotificationUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutTenantInput | NotificationCreateOrConnectWithoutTenantInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutTenantInput | NotificationUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: NotificationCreateManyTenantInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutTenantInput | NotificationUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutTenantInput | NotificationUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }
  export type AuditLogUpdateManyWithoutTenantNestedInput = {
    create?: XOR<AuditLogCreateWithoutTenantInput, AuditLogUncheckedCreateWithoutTenantInput> | AuditLogCreateWithoutTenantInput[] | AuditLogUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutTenantInput | AuditLogCreateOrConnectWithoutTenantInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutTenantInput | AuditLogUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: AuditLogCreateManyTenantInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutTenantInput | AuditLogUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutTenantInput | AuditLogUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }
  export type ProjectMemberUpdateManyWithoutTenantNestedInput = {
    create?: XOR<ProjectMemberCreateWithoutTenantInput, ProjectMemberUncheckedCreateWithoutTenantInput> | ProjectMemberCreateWithoutTenantInput[] | ProjectMemberUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutTenantInput | ProjectMemberCreateOrConnectWithoutTenantInput[]
    upsert?: ProjectMemberUpsertWithWhereUniqueWithoutTenantInput | ProjectMemberUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: ProjectMemberCreateManyTenantInputEnvelope
    set?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    disconnect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    delete?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    update?: ProjectMemberUpdateWithWhereUniqueWithoutTenantInput | ProjectMemberUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: ProjectMemberUpdateManyWithWhereWithoutTenantInput | ProjectMemberUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: ProjectMemberScalarWhereInput | ProjectMemberScalarWhereInput[]
  }
  export type UserUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput> | UserCreateWithoutTenantInput[] | UserUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTenantInput | UserCreateOrConnectWithoutTenantInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTenantInput | UserUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: UserCreateManyTenantInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTenantInput | UserUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTenantInput | UserUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }
  export type ProjectUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<ProjectCreateWithoutTenantInput, ProjectUncheckedCreateWithoutTenantInput> | ProjectCreateWithoutTenantInput[] | ProjectUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutTenantInput | ProjectCreateOrConnectWithoutTenantInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutTenantInput | ProjectUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: ProjectCreateManyTenantInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutTenantInput | ProjectUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutTenantInput | ProjectUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }
  export type TaskUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<TaskCreateWithoutTenantInput, TaskUncheckedCreateWithoutTenantInput> | TaskCreateWithoutTenantInput[] | TaskUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutTenantInput | TaskCreateOrConnectWithoutTenantInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutTenantInput | TaskUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: TaskCreateManyTenantInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutTenantInput | TaskUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutTenantInput | TaskUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }
  export type InviteUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<InviteCreateWithoutTenantInput, InviteUncheckedCreateWithoutTenantInput> | InviteCreateWithoutTenantInput[] | InviteUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: InviteCreateOrConnectWithoutTenantInput | InviteCreateOrConnectWithoutTenantInput[]
    upsert?: InviteUpsertWithWhereUniqueWithoutTenantInput | InviteUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: InviteCreateManyTenantInputEnvelope
    set?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    disconnect?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    delete?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    connect?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    update?: InviteUpdateWithWhereUniqueWithoutTenantInput | InviteUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: InviteUpdateManyWithWhereWithoutTenantInput | InviteUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: InviteScalarWhereInput | InviteScalarWhereInput[]
  }
  export type CommentUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<CommentCreateWithoutTenantInput, CommentUncheckedCreateWithoutTenantInput> | CommentCreateWithoutTenantInput[] | CommentUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutTenantInput | CommentCreateOrConnectWithoutTenantInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutTenantInput | CommentUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: CommentCreateManyTenantInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutTenantInput | CommentUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutTenantInput | CommentUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }
  export type NotificationUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<NotificationCreateWithoutTenantInput, NotificationUncheckedCreateWithoutTenantInput> | NotificationCreateWithoutTenantInput[] | NotificationUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutTenantInput | NotificationCreateOrConnectWithoutTenantInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutTenantInput | NotificationUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: NotificationCreateManyTenantInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutTenantInput | NotificationUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutTenantInput | NotificationUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }
  export type AuditLogUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<AuditLogCreateWithoutTenantInput, AuditLogUncheckedCreateWithoutTenantInput> | AuditLogCreateWithoutTenantInput[] | AuditLogUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutTenantInput | AuditLogCreateOrConnectWithoutTenantInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutTenantInput | AuditLogUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: AuditLogCreateManyTenantInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutTenantInput | AuditLogUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutTenantInput | AuditLogUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }
  export type ProjectMemberUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<ProjectMemberCreateWithoutTenantInput, ProjectMemberUncheckedCreateWithoutTenantInput> | ProjectMemberCreateWithoutTenantInput[] | ProjectMemberUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutTenantInput | ProjectMemberCreateOrConnectWithoutTenantInput[]
    upsert?: ProjectMemberUpsertWithWhereUniqueWithoutTenantInput | ProjectMemberUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: ProjectMemberCreateManyTenantInputEnvelope
    set?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    disconnect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    delete?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    update?: ProjectMemberUpdateWithWhereUniqueWithoutTenantInput | ProjectMemberUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: ProjectMemberUpdateManyWithWhereWithoutTenantInput | ProjectMemberUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: ProjectMemberScalarWhereInput | ProjectMemberScalarWhereInput[]
  }
  export type UserCreateNestedOneWithoutRefreshTokensInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
  }
  export type UserUpdateOneRequiredWithoutRefreshTokensNestedInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    upsert?: UserUpsertWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRefreshTokensInput, UserUpdateWithoutRefreshTokensInput>, UserUncheckedUpdateWithoutRefreshTokensInput>
  }
  export type TenantCreateNestedOneWithoutProjectsInput = {
    create?: XOR<TenantCreateWithoutProjectsInput, TenantUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutProjectsInput
    connect?: TenantWhereUniqueInput
  }
  export type UserCreateNestedOneWithoutCreatedProjectsInput = {
    create?: XOR<UserCreateWithoutCreatedProjectsInput, UserUncheckedCreateWithoutCreatedProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedProjectsInput
    connect?: UserWhereUniqueInput
  }
  export type TaskCreateNestedManyWithoutProjectInput = {
    create?: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput> | TaskCreateWithoutProjectInput[] | TaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProjectInput | TaskCreateOrConnectWithoutProjectInput[]
    createMany?: TaskCreateManyProjectInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }
  export type CommentCreateNestedManyWithoutProjectInput = {
    create?: XOR<CommentCreateWithoutProjectInput, CommentUncheckedCreateWithoutProjectInput> | CommentCreateWithoutProjectInput[] | CommentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutProjectInput | CommentCreateOrConnectWithoutProjectInput[]
    createMany?: CommentCreateManyProjectInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }
  export type ProjectMemberCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectMemberCreateWithoutProjectInput, ProjectMemberUncheckedCreateWithoutProjectInput> | ProjectMemberCreateWithoutProjectInput[] | ProjectMemberUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutProjectInput | ProjectMemberCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectMemberCreateManyProjectInputEnvelope
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
  }
  export type TaskUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput> | TaskCreateWithoutProjectInput[] | TaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProjectInput | TaskCreateOrConnectWithoutProjectInput[]
    createMany?: TaskCreateManyProjectInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }
  export type CommentUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<CommentCreateWithoutProjectInput, CommentUncheckedCreateWithoutProjectInput> | CommentCreateWithoutProjectInput[] | CommentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutProjectInput | CommentCreateOrConnectWithoutProjectInput[]
    createMany?: CommentCreateManyProjectInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }
  export type ProjectMemberUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectMemberCreateWithoutProjectInput, ProjectMemberUncheckedCreateWithoutProjectInput> | ProjectMemberCreateWithoutProjectInput[] | ProjectMemberUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutProjectInput | ProjectMemberCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectMemberCreateManyProjectInputEnvelope
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
  }
  export type EnumProjectStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProjectStatus
  }
  export type TenantUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<TenantCreateWithoutProjectsInput, TenantUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutProjectsInput
    upsert?: TenantUpsertWithoutProjectsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutProjectsInput, TenantUpdateWithoutProjectsInput>, TenantUncheckedUpdateWithoutProjectsInput>
  }
  export type UserUpdateOneRequiredWithoutCreatedProjectsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedProjectsInput, UserUncheckedCreateWithoutCreatedProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedProjectsInput
    upsert?: UserUpsertWithoutCreatedProjectsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedProjectsInput, UserUpdateWithoutCreatedProjectsInput>, UserUncheckedUpdateWithoutCreatedProjectsInput>
  }
  export type TaskUpdateManyWithoutProjectNestedInput = {
    create?: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput> | TaskCreateWithoutProjectInput[] | TaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProjectInput | TaskCreateOrConnectWithoutProjectInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutProjectInput | TaskUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: TaskCreateManyProjectInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutProjectInput | TaskUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutProjectInput | TaskUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }
  export type CommentUpdateManyWithoutProjectNestedInput = {
    create?: XOR<CommentCreateWithoutProjectInput, CommentUncheckedCreateWithoutProjectInput> | CommentCreateWithoutProjectInput[] | CommentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutProjectInput | CommentCreateOrConnectWithoutProjectInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutProjectInput | CommentUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: CommentCreateManyProjectInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutProjectInput | CommentUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutProjectInput | CommentUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }
  export type ProjectMemberUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectMemberCreateWithoutProjectInput, ProjectMemberUncheckedCreateWithoutProjectInput> | ProjectMemberCreateWithoutProjectInput[] | ProjectMemberUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutProjectInput | ProjectMemberCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectMemberUpsertWithWhereUniqueWithoutProjectInput | ProjectMemberUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectMemberCreateManyProjectInputEnvelope
    set?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    disconnect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    delete?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    update?: ProjectMemberUpdateWithWhereUniqueWithoutProjectInput | ProjectMemberUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectMemberUpdateManyWithWhereWithoutProjectInput | ProjectMemberUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectMemberScalarWhereInput | ProjectMemberScalarWhereInput[]
  }
  export type TaskUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput> | TaskCreateWithoutProjectInput[] | TaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProjectInput | TaskCreateOrConnectWithoutProjectInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutProjectInput | TaskUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: TaskCreateManyProjectInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutProjectInput | TaskUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutProjectInput | TaskUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }
  export type CommentUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<CommentCreateWithoutProjectInput, CommentUncheckedCreateWithoutProjectInput> | CommentCreateWithoutProjectInput[] | CommentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutProjectInput | CommentCreateOrConnectWithoutProjectInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutProjectInput | CommentUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: CommentCreateManyProjectInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutProjectInput | CommentUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutProjectInput | CommentUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }
  export type ProjectMemberUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectMemberCreateWithoutProjectInput, ProjectMemberUncheckedCreateWithoutProjectInput> | ProjectMemberCreateWithoutProjectInput[] | ProjectMemberUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutProjectInput | ProjectMemberCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectMemberUpsertWithWhereUniqueWithoutProjectInput | ProjectMemberUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectMemberCreateManyProjectInputEnvelope
    set?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    disconnect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    delete?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    update?: ProjectMemberUpdateWithWhereUniqueWithoutProjectInput | ProjectMemberUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectMemberUpdateManyWithWhereWithoutProjectInput | ProjectMemberUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectMemberScalarWhereInput | ProjectMemberScalarWhereInput[]
  }
  export type TenantCreateNestedOneWithoutTasksInput = {
    create?: XOR<TenantCreateWithoutTasksInput, TenantUncheckedCreateWithoutTasksInput>
    connectOrCreate?: TenantCreateOrConnectWithoutTasksInput
    connect?: TenantWhereUniqueInput
  }
  export type ProjectCreateNestedOneWithoutTasksInput = {
    create?: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTasksInput
    connect?: ProjectWhereUniqueInput
  }
  export type UserCreateNestedOneWithoutAssignedTasksInput = {
    create?: XOR<UserCreateWithoutAssignedTasksInput, UserUncheckedCreateWithoutAssignedTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedTasksInput
    connect?: UserWhereUniqueInput
  }
  export type UserCreateNestedOneWithoutCreatedTasksInput = {
    create?: XOR<UserCreateWithoutCreatedTasksInput, UserUncheckedCreateWithoutCreatedTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedTasksInput
    connect?: UserWhereUniqueInput
  }
  export type EnumTaskStatusFieldUpdateOperationsInput = {
    set?: $Enums.TaskStatus
  }
  export type EnumTaskPriorityFieldUpdateOperationsInput = {
    set?: $Enums.TaskPriority
  }
  export type TenantUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<TenantCreateWithoutTasksInput, TenantUncheckedCreateWithoutTasksInput>
    connectOrCreate?: TenantCreateOrConnectWithoutTasksInput
    upsert?: TenantUpsertWithoutTasksInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutTasksInput, TenantUpdateWithoutTasksInput>, TenantUncheckedUpdateWithoutTasksInput>
  }
  export type ProjectUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTasksInput
    upsert?: ProjectUpsertWithoutTasksInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutTasksInput, ProjectUpdateWithoutTasksInput>, ProjectUncheckedUpdateWithoutTasksInput>
  }
  export type UserUpdateOneWithoutAssignedTasksNestedInput = {
    create?: XOR<UserCreateWithoutAssignedTasksInput, UserUncheckedCreateWithoutAssignedTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedTasksInput
    upsert?: UserUpsertWithoutAssignedTasksInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssignedTasksInput, UserUpdateWithoutAssignedTasksInput>, UserUncheckedUpdateWithoutAssignedTasksInput>
  }
  export type UserUpdateOneRequiredWithoutCreatedTasksNestedInput = {
    create?: XOR<UserCreateWithoutCreatedTasksInput, UserUncheckedCreateWithoutCreatedTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedTasksInput
    upsert?: UserUpsertWithoutCreatedTasksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedTasksInput, UserUpdateWithoutCreatedTasksInput>, UserUncheckedUpdateWithoutCreatedTasksInput>
  }
  export type TenantCreateNestedOneWithoutCommentsInput = {
    create?: XOR<TenantCreateWithoutCommentsInput, TenantUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutCommentsInput
    connect?: TenantWhereUniqueInput
  }
  export type ProjectCreateNestedOneWithoutCommentsInput = {
    create?: XOR<ProjectCreateWithoutCommentsInput, ProjectUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutCommentsInput
    connect?: ProjectWhereUniqueInput
  }
  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }
  export type CommentCreateNestedOneWithoutRepliesInput = {
    create?: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: CommentCreateOrConnectWithoutRepliesInput
    connect?: CommentWhereUniqueInput
  }
  export type CommentCreateNestedManyWithoutParentInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[]
    createMany?: CommentCreateManyParentInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }
  export type CommentUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[]
    createMany?: CommentCreateManyParentInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }
  export type TenantUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<TenantCreateWithoutCommentsInput, TenantUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutCommentsInput
    upsert?: TenantUpsertWithoutCommentsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutCommentsInput, TenantUpdateWithoutCommentsInput>, TenantUncheckedUpdateWithoutCommentsInput>
  }
  export type ProjectUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<ProjectCreateWithoutCommentsInput, ProjectUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutCommentsInput
    upsert?: ProjectUpsertWithoutCommentsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutCommentsInput, ProjectUpdateWithoutCommentsInput>, ProjectUncheckedUpdateWithoutCommentsInput>
  }
  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }
  export type CommentUpdateOneWithoutRepliesNestedInput = {
    create?: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: CommentCreateOrConnectWithoutRepliesInput
    upsert?: CommentUpsertWithoutRepliesInput
    disconnect?: CommentWhereInput | boolean
    delete?: CommentWhereInput | boolean
    connect?: CommentWhereUniqueInput
    update?: XOR<XOR<CommentUpdateToOneWithWhereWithoutRepliesInput, CommentUpdateWithoutRepliesInput>, CommentUncheckedUpdateWithoutRepliesInput>
  }
  export type CommentUpdateManyWithoutParentNestedInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutParentInput | CommentUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CommentCreateManyParentInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutParentInput | CommentUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutParentInput | CommentUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }
  export type CommentUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutParentInput | CommentUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CommentCreateManyParentInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutParentInput | CommentUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutParentInput | CommentUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }
  export type TenantCreateNestedOneWithoutInvitesInput = {
    create?: XOR<TenantCreateWithoutInvitesInput, TenantUncheckedCreateWithoutInvitesInput>
    connectOrCreate?: TenantCreateOrConnectWithoutInvitesInput
    connect?: TenantWhereUniqueInput
  }
  export type EnumInviteStatusFieldUpdateOperationsInput = {
    set?: $Enums.InviteStatus
  }
  export type TenantUpdateOneRequiredWithoutInvitesNestedInput = {
    create?: XOR<TenantCreateWithoutInvitesInput, TenantUncheckedCreateWithoutInvitesInput>
    connectOrCreate?: TenantCreateOrConnectWithoutInvitesInput
    upsert?: TenantUpsertWithoutInvitesInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutInvitesInput, TenantUpdateWithoutInvitesInput>, TenantUncheckedUpdateWithoutInvitesInput>
  }
  export type TenantCreateNestedOneWithoutProjectMembersInput = {
    create?: XOR<TenantCreateWithoutProjectMembersInput, TenantUncheckedCreateWithoutProjectMembersInput>
    connectOrCreate?: TenantCreateOrConnectWithoutProjectMembersInput
    connect?: TenantWhereUniqueInput
  }
  export type UserCreateNestedOneWithoutProjectMembershipsInput = {
    create?: XOR<UserCreateWithoutProjectMembershipsInput, UserUncheckedCreateWithoutProjectMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectMembershipsInput
    connect?: UserWhereUniqueInput
  }
  export type ProjectCreateNestedOneWithoutMembersInput = {
    create?: XOR<ProjectCreateWithoutMembersInput, ProjectUncheckedCreateWithoutMembersInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutMembersInput
    connect?: ProjectWhereUniqueInput
  }
  export type TenantUpdateOneRequiredWithoutProjectMembersNestedInput = {
    create?: XOR<TenantCreateWithoutProjectMembersInput, TenantUncheckedCreateWithoutProjectMembersInput>
    connectOrCreate?: TenantCreateOrConnectWithoutProjectMembersInput
    upsert?: TenantUpsertWithoutProjectMembersInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutProjectMembersInput, TenantUpdateWithoutProjectMembersInput>, TenantUncheckedUpdateWithoutProjectMembersInput>
  }
  export type UserUpdateOneRequiredWithoutProjectMembershipsNestedInput = {
    create?: XOR<UserCreateWithoutProjectMembershipsInput, UserUncheckedCreateWithoutProjectMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectMembershipsInput
    upsert?: UserUpsertWithoutProjectMembershipsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectMembershipsInput, UserUpdateWithoutProjectMembershipsInput>, UserUncheckedUpdateWithoutProjectMembershipsInput>
  }
  export type ProjectUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<ProjectCreateWithoutMembersInput, ProjectUncheckedCreateWithoutMembersInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutMembersInput
    upsert?: ProjectUpsertWithoutMembersInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutMembersInput, ProjectUpdateWithoutMembersInput>, ProjectUncheckedUpdateWithoutMembersInput>
  }
  export type TenantCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<TenantCreateWithoutAuditLogsInput, TenantUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutAuditLogsInput
    connect?: TenantWhereUniqueInput
  }
  export type UserCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
  }
  export type EnumAuditEntityTypeFieldUpdateOperationsInput = {
    set?: $Enums.AuditEntityType
  }
  export type EnumAuditActionFieldUpdateOperationsInput = {
    set?: $Enums.AuditAction
  }
  export type TenantUpdateOneRequiredWithoutAuditLogsNestedInput = {
    create?: XOR<TenantCreateWithoutAuditLogsInput, TenantUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutAuditLogsInput
    upsert?: TenantUpsertWithoutAuditLogsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutAuditLogsInput, TenantUpdateWithoutAuditLogsInput>, TenantUncheckedUpdateWithoutAuditLogsInput>
  }
  export type UserUpdateOneRequiredWithoutAuditLogsNestedInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    upsert?: UserUpsertWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuditLogsInput, UserUpdateWithoutAuditLogsInput>, UserUncheckedUpdateWithoutAuditLogsInput>
  }
  export type TenantCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<TenantCreateWithoutNotificationsInput, TenantUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutNotificationsInput
    connect?: TenantWhereUniqueInput
  }
  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }
  export type EnumNotificationTypeFieldUpdateOperationsInput = {
    set?: $Enums.NotificationType
  }
  export type TenantUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<TenantCreateWithoutNotificationsInput, TenantUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutNotificationsInput
    upsert?: TenantUpsertWithoutNotificationsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutNotificationsInput, TenantUpdateWithoutNotificationsInput>, TenantUncheckedUpdateWithoutNotificationsInput>
  }
  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }
  export type UserCreateNestedOneWithoutEmailVerificationsInput = {
    create?: XOR<UserCreateWithoutEmailVerificationsInput, UserUncheckedCreateWithoutEmailVerificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmailVerificationsInput
    connect?: UserWhereUniqueInput
  }
  export type UserUpdateOneRequiredWithoutEmailVerificationsNestedInput = {
    create?: XOR<UserCreateWithoutEmailVerificationsInput, UserUncheckedCreateWithoutEmailVerificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmailVerificationsInput
    upsert?: UserUpsertWithoutEmailVerificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEmailVerificationsInput, UserUpdateWithoutEmailVerificationsInput>, UserUncheckedUpdateWithoutEmailVerificationsInput>
  }
  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }
  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }
  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }
  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }
  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }
  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }
  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }
  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedEnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[]
    notIn?: $Enums.ProjectStatus[]
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus
  }
  export type NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[]
    notIn?: $Enums.ProjectStatus[]
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectStatusFilter<$PrismaModel>
  }
  export type NestedEnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[]
    notIn?: $Enums.TaskStatus[]
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }
  export type NestedEnumTaskPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskPriority | EnumTaskPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TaskPriority[]
    notIn?: $Enums.TaskPriority[]
    not?: NestedEnumTaskPriorityFilter<$PrismaModel> | $Enums.TaskPriority
  }
  export type NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[]
    notIn?: $Enums.TaskStatus[]
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }
  export type NestedEnumTaskPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskPriority | EnumTaskPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TaskPriority[]
    notIn?: $Enums.TaskPriority[]
    not?: NestedEnumTaskPriorityWithAggregatesFilter<$PrismaModel> | $Enums.TaskPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskPriorityFilter<$PrismaModel>
    _max?: NestedEnumTaskPriorityFilter<$PrismaModel>
  }
  export type NestedEnumInviteStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InviteStatus | EnumInviteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InviteStatus[]
    notIn?: $Enums.InviteStatus[]
    not?: NestedEnumInviteStatusFilter<$PrismaModel> | $Enums.InviteStatus
  }
  export type NestedEnumInviteStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InviteStatus | EnumInviteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InviteStatus[]
    notIn?: $Enums.InviteStatus[]
    not?: NestedEnumInviteStatusWithAggregatesFilter<$PrismaModel> | $Enums.InviteStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInviteStatusFilter<$PrismaModel>
    _max?: NestedEnumInviteStatusFilter<$PrismaModel>
  }
  export type NestedEnumAuditEntityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditEntityType | EnumAuditEntityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AuditEntityType[]
    notIn?: $Enums.AuditEntityType[]
    not?: NestedEnumAuditEntityTypeFilter<$PrismaModel> | $Enums.AuditEntityType
  }
  export type NestedEnumAuditActionFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditAction | EnumAuditActionFieldRefInput<$PrismaModel>
    in?: $Enums.AuditAction[]
    notIn?: $Enums.AuditAction[]
    not?: NestedEnumAuditActionFilter<$PrismaModel> | $Enums.AuditAction
  }
  export type NestedEnumAuditEntityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditEntityType | EnumAuditEntityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AuditEntityType[]
    notIn?: $Enums.AuditEntityType[]
    not?: NestedEnumAuditEntityTypeWithAggregatesFilter<$PrismaModel> | $Enums.AuditEntityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuditEntityTypeFilter<$PrismaModel>
    _max?: NestedEnumAuditEntityTypeFilter<$PrismaModel>
  }
  export type NestedEnumAuditActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuditAction | EnumAuditActionFieldRefInput<$PrismaModel>
    in?: $Enums.AuditAction[]
    notIn?: $Enums.AuditAction[]
    not?: NestedEnumAuditActionWithAggregatesFilter<$PrismaModel> | $Enums.AuditAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuditActionFilter<$PrismaModel>
    _max?: NestedEnumAuditActionFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>
  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type NestedEnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[]
    notIn?: $Enums.NotificationType[]
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }
  export type NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[]
    notIn?: $Enums.NotificationType[]
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }
  export type TenantCreateWithoutUsersInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectCreateNestedManyWithoutTenantInput
    tasks?: TaskCreateNestedManyWithoutTenantInput
    invites?: InviteCreateNestedManyWithoutTenantInput
    comments?: CommentCreateNestedManyWithoutTenantInput
    notifications?: NotificationCreateNestedManyWithoutTenantInput
    auditLogs?: AuditLogCreateNestedManyWithoutTenantInput
    projectMembers?: ProjectMemberCreateNestedManyWithoutTenantInput
  }
  export type TenantUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutTenantInput
    tasks?: TaskUncheckedCreateNestedManyWithoutTenantInput
    invites?: InviteUncheckedCreateNestedManyWithoutTenantInput
    comments?: CommentUncheckedCreateNestedManyWithoutTenantInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutTenantInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutTenantInput
    projectMembers?: ProjectMemberUncheckedCreateNestedManyWithoutTenantInput
  }
  export type TenantCreateOrConnectWithoutUsersInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutUsersInput, TenantUncheckedCreateWithoutUsersInput>
  }
  export type ProjectCreateWithoutCreatorInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.ProjectStatus
    startDate?: Date | string | null
    endDate?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutProjectsInput
    tasks?: TaskCreateNestedManyWithoutProjectInput
    comments?: CommentCreateNestedManyWithoutProjectInput
    members?: ProjectMemberCreateNestedManyWithoutProjectInput
  }
  export type ProjectUncheckedCreateWithoutCreatorInput = {
    id?: string
    tenantId: string
    name: string
    description?: string | null
    status?: $Enums.ProjectStatus
    startDate?: Date | string | null
    endDate?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput
    comments?: CommentUncheckedCreateNestedManyWithoutProjectInput
    members?: ProjectMemberUncheckedCreateNestedManyWithoutProjectInput
  }
  export type ProjectCreateOrConnectWithoutCreatorInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutCreatorInput, ProjectUncheckedCreateWithoutCreatorInput>
  }
  export type ProjectCreateManyCreatorInputEnvelope = {
    data: ProjectCreateManyCreatorInput | ProjectCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }
  export type TaskCreateWithoutAssigneeInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    dueDate?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutTasksInput
    project: ProjectCreateNestedOneWithoutTasksInput
    creator: UserCreateNestedOneWithoutCreatedTasksInput
  }
  export type TaskUncheckedCreateWithoutAssigneeInput = {
    id?: string
    tenantId: string
    projectId: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    dueDate?: Date | string | null
    createdBy: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }
  export type TaskCreateOrConnectWithoutAssigneeInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutAssigneeInput, TaskUncheckedCreateWithoutAssigneeInput>
  }
  export type TaskCreateManyAssigneeInputEnvelope = {
    data: TaskCreateManyAssigneeInput | TaskCreateManyAssigneeInput[]
    skipDuplicates?: boolean
  }
  export type TaskCreateWithoutCreatorInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    dueDate?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutTasksInput
    project: ProjectCreateNestedOneWithoutTasksInput
    assignee?: UserCreateNestedOneWithoutAssignedTasksInput
  }
  export type TaskUncheckedCreateWithoutCreatorInput = {
    id?: string
    tenantId: string
    projectId: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    assigneeId?: string | null
    dueDate?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }
  export type TaskCreateOrConnectWithoutCreatorInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutCreatorInput, TaskUncheckedCreateWithoutCreatorInput>
  }
  export type TaskCreateManyCreatorInputEnvelope = {
    data: TaskCreateManyCreatorInput | TaskCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }
  export type RefreshTokenCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }
  export type RefreshTokenUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }
  export type RefreshTokenCreateOrConnectWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }
  export type RefreshTokenCreateManyUserInputEnvelope = {
    data: RefreshTokenCreateManyUserInput | RefreshTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }
  export type CommentCreateWithoutUserInput = {
    id?: string
    text: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutCommentsInput
    project: ProjectCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutRepliesInput
    replies?: CommentCreateNestedManyWithoutParentInput
  }
  export type CommentUncheckedCreateWithoutUserInput = {
    id?: string
    tenantId: string
    projectId: string
    parentId?: string | null
    text: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
  }
  export type CommentCreateOrConnectWithoutUserInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }
  export type CommentCreateManyUserInputEnvelope = {
    data: CommentCreateManyUserInput | CommentCreateManyUserInput[]
    skipDuplicates?: boolean
  }
  export type NotificationCreateWithoutUserInput = {
    id?: string
    type: $Enums.NotificationType
    message: string
    link?: string | null
    isRead?: boolean
    createdAt?: Date | string
    tenant: TenantCreateNestedOneWithoutNotificationsInput
  }
  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    tenantId: string
    type: $Enums.NotificationType
    message: string
    link?: string | null
    isRead?: boolean
    createdAt?: Date | string
  }
  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }
  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }
  export type AuditLogCreateWithoutUserInput = {
    id?: string
    entityType: $Enums.AuditEntityType
    entityId: string
    action: $Enums.AuditAction
    changes: JsonNullValueInput | InputJsonValue
    timestamp?: Date | string
    tenant: TenantCreateNestedOneWithoutAuditLogsInput
  }
  export type AuditLogUncheckedCreateWithoutUserInput = {
    id?: string
    tenantId: string
    entityType: $Enums.AuditEntityType
    entityId: string
    action: $Enums.AuditAction
    changes: JsonNullValueInput | InputJsonValue
    timestamp?: Date | string
  }
  export type AuditLogCreateOrConnectWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
  }
  export type AuditLogCreateManyUserInputEnvelope = {
    data: AuditLogCreateManyUserInput | AuditLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }
  export type ProjectMemberCreateWithoutUserInput = {
    id?: string
    role?: $Enums.Role
    createdAt?: Date | string
    tenant: TenantCreateNestedOneWithoutProjectMembersInput
    project: ProjectCreateNestedOneWithoutMembersInput
  }
  export type ProjectMemberUncheckedCreateWithoutUserInput = {
    id?: string
    tenantId: string
    projectId: string
    role?: $Enums.Role
    createdAt?: Date | string
  }
  export type ProjectMemberCreateOrConnectWithoutUserInput = {
    where: ProjectMemberWhereUniqueInput
    create: XOR<ProjectMemberCreateWithoutUserInput, ProjectMemberUncheckedCreateWithoutUserInput>
  }
  export type ProjectMemberCreateManyUserInputEnvelope = {
    data: ProjectMemberCreateManyUserInput | ProjectMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }
  export type EmailVerificationCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }
  export type EmailVerificationUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }
  export type EmailVerificationCreateOrConnectWithoutUserInput = {
    where: EmailVerificationWhereUniqueInput
    create: XOR<EmailVerificationCreateWithoutUserInput, EmailVerificationUncheckedCreateWithoutUserInput>
  }
  export type EmailVerificationCreateManyUserInputEnvelope = {
    data: EmailVerificationCreateManyUserInput | EmailVerificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }
  export type TenantUpsertWithoutUsersInput = {
    update: XOR<TenantUpdateWithoutUsersInput, TenantUncheckedUpdateWithoutUsersInput>
    create: XOR<TenantCreateWithoutUsersInput, TenantUncheckedCreateWithoutUsersInput>
    where?: TenantWhereInput
  }
  export type TenantUpdateToOneWithWhereWithoutUsersInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutUsersInput, TenantUncheckedUpdateWithoutUsersInput>
  }
  export type TenantUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUpdateManyWithoutTenantNestedInput
    tasks?: TaskUpdateManyWithoutTenantNestedInput
    invites?: InviteUpdateManyWithoutTenantNestedInput
    comments?: CommentUpdateManyWithoutTenantNestedInput
    notifications?: NotificationUpdateManyWithoutTenantNestedInput
    auditLogs?: AuditLogUpdateManyWithoutTenantNestedInput
    projectMembers?: ProjectMemberUpdateManyWithoutTenantNestedInput
  }
  export type TenantUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutTenantNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutTenantNestedInput
    invites?: InviteUncheckedUpdateManyWithoutTenantNestedInput
    comments?: CommentUncheckedUpdateManyWithoutTenantNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutTenantNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutTenantNestedInput
    projectMembers?: ProjectMemberUncheckedUpdateManyWithoutTenantNestedInput
  }
  export type ProjectUpsertWithWhereUniqueWithoutCreatorInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutCreatorInput, ProjectUncheckedUpdateWithoutCreatorInput>
    create: XOR<ProjectCreateWithoutCreatorInput, ProjectUncheckedCreateWithoutCreatorInput>
  }
  export type ProjectUpdateWithWhereUniqueWithoutCreatorInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutCreatorInput, ProjectUncheckedUpdateWithoutCreatorInput>
  }
  export type ProjectUpdateManyWithWhereWithoutCreatorInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutCreatorInput>
  }
  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    tenantId?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    startDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    createdBy?: StringFilter<"Project"> | string
    deletedAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
  }
  export type TaskUpsertWithWhereUniqueWithoutAssigneeInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutAssigneeInput, TaskUncheckedUpdateWithoutAssigneeInput>
    create: XOR<TaskCreateWithoutAssigneeInput, TaskUncheckedCreateWithoutAssigneeInput>
  }
  export type TaskUpdateWithWhereUniqueWithoutAssigneeInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutAssigneeInput, TaskUncheckedUpdateWithoutAssigneeInput>
  }
  export type TaskUpdateManyWithWhereWithoutAssigneeInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutAssigneeInput>
  }
  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: StringFilter<"Task"> | string
    tenantId?: StringFilter<"Task"> | string
    projectId?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    priority?: EnumTaskPriorityFilter<"Task"> | $Enums.TaskPriority
    assigneeId?: StringNullableFilter<"Task"> | string | null
    dueDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    createdBy?: StringFilter<"Task"> | string
    deletedAt?: DateTimeNullableFilter<"Task"> | Date | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
  }
  export type TaskUpsertWithWhereUniqueWithoutCreatorInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutCreatorInput, TaskUncheckedUpdateWithoutCreatorInput>
    create: XOR<TaskCreateWithoutCreatorInput, TaskUncheckedCreateWithoutCreatorInput>
  }
  export type TaskUpdateWithWhereUniqueWithoutCreatorInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutCreatorInput, TaskUncheckedUpdateWithoutCreatorInput>
  }
  export type TaskUpdateManyWithWhereWithoutCreatorInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutCreatorInput>
  }
  export type RefreshTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    update: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }
  export type RefreshTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    data: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
  }
  export type RefreshTokenUpdateManyWithWhereWithoutUserInput = {
    where: RefreshTokenScalarWhereInput
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyWithoutUserInput>
  }
  export type RefreshTokenScalarWhereInput = {
    AND?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    OR?: RefreshTokenScalarWhereInput[]
    NOT?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    token?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    userId?: StringFilter<"RefreshToken"> | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
  }
  export type CommentUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }
  export type CommentUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
  }
  export type CommentUpdateManyWithWhereWithoutUserInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutUserInput>
  }
  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: StringFilter<"Comment"> | string
    tenantId?: StringFilter<"Comment"> | string
    projectId?: StringFilter<"Comment"> | string
    userId?: StringFilter<"Comment"> | string
    parentId?: StringNullableFilter<"Comment"> | string | null
    text?: StringFilter<"Comment"> | string
    deletedAt?: DateTimeNullableFilter<"Comment"> | Date | string | null
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
  }
  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }
  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }
  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }
  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    tenantId?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    message?: StringFilter<"Notification"> | string
    link?: StringNullableFilter<"Notification"> | string | null
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }
  export type AuditLogUpsertWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
    create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
  }
  export type AuditLogUpdateWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
  }
  export type AuditLogUpdateManyWithWhereWithoutUserInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutUserInput>
  }
  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    OR?: AuditLogScalarWhereInput[]
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    tenantId?: StringFilter<"AuditLog"> | string
    userId?: StringFilter<"AuditLog"> | string
    entityType?: EnumAuditEntityTypeFilter<"AuditLog"> | $Enums.AuditEntityType
    entityId?: StringFilter<"AuditLog"> | string
    action?: EnumAuditActionFilter<"AuditLog"> | $Enums.AuditAction
    changes?: JsonFilter<"AuditLog">
    timestamp?: DateTimeFilter<"AuditLog"> | Date | string
  }
  export type ProjectMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: ProjectMemberWhereUniqueInput
    update: XOR<ProjectMemberUpdateWithoutUserInput, ProjectMemberUncheckedUpdateWithoutUserInput>
    create: XOR<ProjectMemberCreateWithoutUserInput, ProjectMemberUncheckedCreateWithoutUserInput>
  }
  export type ProjectMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: ProjectMemberWhereUniqueInput
    data: XOR<ProjectMemberUpdateWithoutUserInput, ProjectMemberUncheckedUpdateWithoutUserInput>
  }
  export type ProjectMemberUpdateManyWithWhereWithoutUserInput = {
    where: ProjectMemberScalarWhereInput
    data: XOR<ProjectMemberUpdateManyMutationInput, ProjectMemberUncheckedUpdateManyWithoutUserInput>
  }
  export type ProjectMemberScalarWhereInput = {
    AND?: ProjectMemberScalarWhereInput | ProjectMemberScalarWhereInput[]
    OR?: ProjectMemberScalarWhereInput[]
    NOT?: ProjectMemberScalarWhereInput | ProjectMemberScalarWhereInput[]
    id?: StringFilter<"ProjectMember"> | string
    tenantId?: StringFilter<"ProjectMember"> | string
    userId?: StringFilter<"ProjectMember"> | string
    projectId?: StringFilter<"ProjectMember"> | string
    role?: EnumRoleFilter<"ProjectMember"> | $Enums.Role
    createdAt?: DateTimeFilter<"ProjectMember"> | Date | string
  }
  export type EmailVerificationUpsertWithWhereUniqueWithoutUserInput = {
    where: EmailVerificationWhereUniqueInput
    update: XOR<EmailVerificationUpdateWithoutUserInput, EmailVerificationUncheckedUpdateWithoutUserInput>
    create: XOR<EmailVerificationCreateWithoutUserInput, EmailVerificationUncheckedCreateWithoutUserInput>
  }
  export type EmailVerificationUpdateWithWhereUniqueWithoutUserInput = {
    where: EmailVerificationWhereUniqueInput
    data: XOR<EmailVerificationUpdateWithoutUserInput, EmailVerificationUncheckedUpdateWithoutUserInput>
  }
  export type EmailVerificationUpdateManyWithWhereWithoutUserInput = {
    where: EmailVerificationScalarWhereInput
    data: XOR<EmailVerificationUpdateManyMutationInput, EmailVerificationUncheckedUpdateManyWithoutUserInput>
  }
  export type EmailVerificationScalarWhereInput = {
    AND?: EmailVerificationScalarWhereInput | EmailVerificationScalarWhereInput[]
    OR?: EmailVerificationScalarWhereInput[]
    NOT?: EmailVerificationScalarWhereInput | EmailVerificationScalarWhereInput[]
    id?: StringFilter<"EmailVerification"> | string
    userId?: StringFilter<"EmailVerification"> | string
    token?: StringFilter<"EmailVerification"> | string
    expiresAt?: DateTimeFilter<"EmailVerification"> | Date | string
    createdAt?: DateTimeFilter<"EmailVerification"> | Date | string
  }
  export type UserCreateWithoutTenantInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role?: $Enums.Role
    isActive?: boolean
    isVerified?: boolean
    totpSecret?: string | null
    totpEnabled?: boolean
    avatarUrl?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdProjects?: ProjectCreateNestedManyWithoutCreatorInput
    assignedTasks?: TaskCreateNestedManyWithoutAssigneeInput
    createdTasks?: TaskCreateNestedManyWithoutCreatorInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    projectMemberships?: ProjectMemberCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationCreateNestedManyWithoutUserInput
  }
  export type UserUncheckedCreateWithoutTenantInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role?: $Enums.Role
    isActive?: boolean
    isVerified?: boolean
    totpSecret?: string | null
    totpEnabled?: boolean
    avatarUrl?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdProjects?: ProjectUncheckedCreateNestedManyWithoutCreatorInput
    assignedTasks?: TaskUncheckedCreateNestedManyWithoutAssigneeInput
    createdTasks?: TaskUncheckedCreateNestedManyWithoutCreatorInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    projectMemberships?: ProjectMemberUncheckedCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationUncheckedCreateNestedManyWithoutUserInput
  }
  export type UserCreateOrConnectWithoutTenantInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput>
  }
  export type UserCreateManyTenantInputEnvelope = {
    data: UserCreateManyTenantInput | UserCreateManyTenantInput[]
    skipDuplicates?: boolean
  }
  export type ProjectCreateWithoutTenantInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.ProjectStatus
    startDate?: Date | string | null
    endDate?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutCreatedProjectsInput
    tasks?: TaskCreateNestedManyWithoutProjectInput
    comments?: CommentCreateNestedManyWithoutProjectInput
    members?: ProjectMemberCreateNestedManyWithoutProjectInput
  }
  export type ProjectUncheckedCreateWithoutTenantInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.ProjectStatus
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdBy: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput
    comments?: CommentUncheckedCreateNestedManyWithoutProjectInput
    members?: ProjectMemberUncheckedCreateNestedManyWithoutProjectInput
  }
  export type ProjectCreateOrConnectWithoutTenantInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutTenantInput, ProjectUncheckedCreateWithoutTenantInput>
  }
  export type ProjectCreateManyTenantInputEnvelope = {
    data: ProjectCreateManyTenantInput | ProjectCreateManyTenantInput[]
    skipDuplicates?: boolean
  }
  export type TaskCreateWithoutTenantInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    dueDate?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutTasksInput
    assignee?: UserCreateNestedOneWithoutAssignedTasksInput
    creator: UserCreateNestedOneWithoutCreatedTasksInput
  }
  export type TaskUncheckedCreateWithoutTenantInput = {
    id?: string
    projectId: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    assigneeId?: string | null
    dueDate?: Date | string | null
    createdBy: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }
  export type TaskCreateOrConnectWithoutTenantInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutTenantInput, TaskUncheckedCreateWithoutTenantInput>
  }
  export type TaskCreateManyTenantInputEnvelope = {
    data: TaskCreateManyTenantInput | TaskCreateManyTenantInput[]
    skipDuplicates?: boolean
  }
  export type InviteCreateWithoutTenantInput = {
    id?: string
    email: string
    role?: $Enums.Role
    token: string
    status?: $Enums.InviteStatus
    expiresAt: Date | string
    createdAt?: Date | string
  }
  export type InviteUncheckedCreateWithoutTenantInput = {
    id?: string
    email: string
    role?: $Enums.Role
    token: string
    status?: $Enums.InviteStatus
    expiresAt: Date | string
    createdAt?: Date | string
  }
  export type InviteCreateOrConnectWithoutTenantInput = {
    where: InviteWhereUniqueInput
    create: XOR<InviteCreateWithoutTenantInput, InviteUncheckedCreateWithoutTenantInput>
  }
  export type InviteCreateManyTenantInputEnvelope = {
    data: InviteCreateManyTenantInput | InviteCreateManyTenantInput[]
    skipDuplicates?: boolean
  }
  export type CommentCreateWithoutTenantInput = {
    id?: string
    text: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutRepliesInput
    replies?: CommentCreateNestedManyWithoutParentInput
  }
  export type CommentUncheckedCreateWithoutTenantInput = {
    id?: string
    projectId: string
    userId: string
    parentId?: string | null
    text: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
  }
  export type CommentCreateOrConnectWithoutTenantInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutTenantInput, CommentUncheckedCreateWithoutTenantInput>
  }
  export type CommentCreateManyTenantInputEnvelope = {
    data: CommentCreateManyTenantInput | CommentCreateManyTenantInput[]
    skipDuplicates?: boolean
  }
  export type NotificationCreateWithoutTenantInput = {
    id?: string
    type: $Enums.NotificationType
    message: string
    link?: string | null
    isRead?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
  }
  export type NotificationUncheckedCreateWithoutTenantInput = {
    id?: string
    userId: string
    type: $Enums.NotificationType
    message: string
    link?: string | null
    isRead?: boolean
    createdAt?: Date | string
  }
  export type NotificationCreateOrConnectWithoutTenantInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutTenantInput, NotificationUncheckedCreateWithoutTenantInput>
  }
  export type NotificationCreateManyTenantInputEnvelope = {
    data: NotificationCreateManyTenantInput | NotificationCreateManyTenantInput[]
    skipDuplicates?: boolean
  }
  export type AuditLogCreateWithoutTenantInput = {
    id?: string
    entityType: $Enums.AuditEntityType
    entityId: string
    action: $Enums.AuditAction
    changes: JsonNullValueInput | InputJsonValue
    timestamp?: Date | string
    user: UserCreateNestedOneWithoutAuditLogsInput
  }
  export type AuditLogUncheckedCreateWithoutTenantInput = {
    id?: string
    userId: string
    entityType: $Enums.AuditEntityType
    entityId: string
    action: $Enums.AuditAction
    changes: JsonNullValueInput | InputJsonValue
    timestamp?: Date | string
  }
  export type AuditLogCreateOrConnectWithoutTenantInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutTenantInput, AuditLogUncheckedCreateWithoutTenantInput>
  }
  export type AuditLogCreateManyTenantInputEnvelope = {
    data: AuditLogCreateManyTenantInput | AuditLogCreateManyTenantInput[]
    skipDuplicates?: boolean
  }
  export type ProjectMemberCreateWithoutTenantInput = {
    id?: string
    role?: $Enums.Role
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutProjectMembershipsInput
    project: ProjectCreateNestedOneWithoutMembersInput
  }
  export type ProjectMemberUncheckedCreateWithoutTenantInput = {
    id?: string
    userId: string
    projectId: string
    role?: $Enums.Role
    createdAt?: Date | string
  }
  export type ProjectMemberCreateOrConnectWithoutTenantInput = {
    where: ProjectMemberWhereUniqueInput
    create: XOR<ProjectMemberCreateWithoutTenantInput, ProjectMemberUncheckedCreateWithoutTenantInput>
  }
  export type ProjectMemberCreateManyTenantInputEnvelope = {
    data: ProjectMemberCreateManyTenantInput | ProjectMemberCreateManyTenantInput[]
    skipDuplicates?: boolean
  }
  export type UserUpsertWithWhereUniqueWithoutTenantInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutTenantInput, UserUncheckedUpdateWithoutTenantInput>
    create: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput>
  }
  export type UserUpdateWithWhereUniqueWithoutTenantInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutTenantInput, UserUncheckedUpdateWithoutTenantInput>
  }
  export type UserUpdateManyWithWhereWithoutTenantInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutTenantInput>
  }
  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    tenantId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isActive?: BoolFilter<"User"> | boolean
    isVerified?: BoolFilter<"User"> | boolean
    totpSecret?: StringNullableFilter<"User"> | string | null
    totpEnabled?: BoolFilter<"User"> | boolean
    avatarUrl?: StringNullableFilter<"User"> | string | null
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }
  export type ProjectUpsertWithWhereUniqueWithoutTenantInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutTenantInput, ProjectUncheckedUpdateWithoutTenantInput>
    create: XOR<ProjectCreateWithoutTenantInput, ProjectUncheckedCreateWithoutTenantInput>
  }
  export type ProjectUpdateWithWhereUniqueWithoutTenantInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutTenantInput, ProjectUncheckedUpdateWithoutTenantInput>
  }
  export type ProjectUpdateManyWithWhereWithoutTenantInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutTenantInput>
  }
  export type TaskUpsertWithWhereUniqueWithoutTenantInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutTenantInput, TaskUncheckedUpdateWithoutTenantInput>
    create: XOR<TaskCreateWithoutTenantInput, TaskUncheckedCreateWithoutTenantInput>
  }
  export type TaskUpdateWithWhereUniqueWithoutTenantInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutTenantInput, TaskUncheckedUpdateWithoutTenantInput>
  }
  export type TaskUpdateManyWithWhereWithoutTenantInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutTenantInput>
  }
  export type InviteUpsertWithWhereUniqueWithoutTenantInput = {
    where: InviteWhereUniqueInput
    update: XOR<InviteUpdateWithoutTenantInput, InviteUncheckedUpdateWithoutTenantInput>
    create: XOR<InviteCreateWithoutTenantInput, InviteUncheckedCreateWithoutTenantInput>
  }
  export type InviteUpdateWithWhereUniqueWithoutTenantInput = {
    where: InviteWhereUniqueInput
    data: XOR<InviteUpdateWithoutTenantInput, InviteUncheckedUpdateWithoutTenantInput>
  }
  export type InviteUpdateManyWithWhereWithoutTenantInput = {
    where: InviteScalarWhereInput
    data: XOR<InviteUpdateManyMutationInput, InviteUncheckedUpdateManyWithoutTenantInput>
  }
  export type InviteScalarWhereInput = {
    AND?: InviteScalarWhereInput | InviteScalarWhereInput[]
    OR?: InviteScalarWhereInput[]
    NOT?: InviteScalarWhereInput | InviteScalarWhereInput[]
    id?: StringFilter<"Invite"> | string
    tenantId?: StringFilter<"Invite"> | string
    email?: StringFilter<"Invite"> | string
    role?: EnumRoleFilter<"Invite"> | $Enums.Role
    token?: StringFilter<"Invite"> | string
    status?: EnumInviteStatusFilter<"Invite"> | $Enums.InviteStatus
    expiresAt?: DateTimeFilter<"Invite"> | Date | string
    createdAt?: DateTimeFilter<"Invite"> | Date | string
  }
  export type CommentUpsertWithWhereUniqueWithoutTenantInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutTenantInput, CommentUncheckedUpdateWithoutTenantInput>
    create: XOR<CommentCreateWithoutTenantInput, CommentUncheckedCreateWithoutTenantInput>
  }
  export type CommentUpdateWithWhereUniqueWithoutTenantInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutTenantInput, CommentUncheckedUpdateWithoutTenantInput>
  }
  export type CommentUpdateManyWithWhereWithoutTenantInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutTenantInput>
  }
  export type NotificationUpsertWithWhereUniqueWithoutTenantInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutTenantInput, NotificationUncheckedUpdateWithoutTenantInput>
    create: XOR<NotificationCreateWithoutTenantInput, NotificationUncheckedCreateWithoutTenantInput>
  }
  export type NotificationUpdateWithWhereUniqueWithoutTenantInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutTenantInput, NotificationUncheckedUpdateWithoutTenantInput>
  }
  export type NotificationUpdateManyWithWhereWithoutTenantInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutTenantInput>
  }
  export type AuditLogUpsertWithWhereUniqueWithoutTenantInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutTenantInput, AuditLogUncheckedUpdateWithoutTenantInput>
    create: XOR<AuditLogCreateWithoutTenantInput, AuditLogUncheckedCreateWithoutTenantInput>
  }
  export type AuditLogUpdateWithWhereUniqueWithoutTenantInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutTenantInput, AuditLogUncheckedUpdateWithoutTenantInput>
  }
  export type AuditLogUpdateManyWithWhereWithoutTenantInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutTenantInput>
  }
  export type ProjectMemberUpsertWithWhereUniqueWithoutTenantInput = {
    where: ProjectMemberWhereUniqueInput
    update: XOR<ProjectMemberUpdateWithoutTenantInput, ProjectMemberUncheckedUpdateWithoutTenantInput>
    create: XOR<ProjectMemberCreateWithoutTenantInput, ProjectMemberUncheckedCreateWithoutTenantInput>
  }
  export type ProjectMemberUpdateWithWhereUniqueWithoutTenantInput = {
    where: ProjectMemberWhereUniqueInput
    data: XOR<ProjectMemberUpdateWithoutTenantInput, ProjectMemberUncheckedUpdateWithoutTenantInput>
  }
  export type ProjectMemberUpdateManyWithWhereWithoutTenantInput = {
    where: ProjectMemberScalarWhereInput
    data: XOR<ProjectMemberUpdateManyMutationInput, ProjectMemberUncheckedUpdateManyWithoutTenantInput>
  }
  export type UserCreateWithoutRefreshTokensInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role?: $Enums.Role
    isActive?: boolean
    isVerified?: boolean
    totpSecret?: string | null
    totpEnabled?: boolean
    avatarUrl?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutUsersInput
    createdProjects?: ProjectCreateNestedManyWithoutCreatorInput
    assignedTasks?: TaskCreateNestedManyWithoutAssigneeInput
    createdTasks?: TaskCreateNestedManyWithoutCreatorInput
    comments?: CommentCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    projectMemberships?: ProjectMemberCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationCreateNestedManyWithoutUserInput
  }
  export type UserUncheckedCreateWithoutRefreshTokensInput = {
    id?: string
    tenantId: string
    email: string
    passwordHash: string
    name: string
    role?: $Enums.Role
    isActive?: boolean
    isVerified?: boolean
    totpSecret?: string | null
    totpEnabled?: boolean
    avatarUrl?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdProjects?: ProjectUncheckedCreateNestedManyWithoutCreatorInput
    assignedTasks?: TaskUncheckedCreateNestedManyWithoutAssigneeInput
    createdTasks?: TaskUncheckedCreateNestedManyWithoutCreatorInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    projectMemberships?: ProjectMemberUncheckedCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationUncheckedCreateNestedManyWithoutUserInput
  }
  export type UserCreateOrConnectWithoutRefreshTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
  }
  export type UserUpsertWithoutRefreshTokensInput = {
    update: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    where?: UserWhereInput
  }
  export type UserUpdateToOneWithWhereWithoutRefreshTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
  }
  export type UserUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    totpEnabled?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutUsersNestedInput
    createdProjects?: ProjectUpdateManyWithoutCreatorNestedInput
    assignedTasks?: TaskUpdateManyWithoutAssigneeNestedInput
    createdTasks?: TaskUpdateManyWithoutCreatorNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    projectMemberships?: ProjectMemberUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationUpdateManyWithoutUserNestedInput
  }
  export type UserUncheckedUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    totpEnabled?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdProjects?: ProjectUncheckedUpdateManyWithoutCreatorNestedInput
    assignedTasks?: TaskUncheckedUpdateManyWithoutAssigneeNestedInput
    createdTasks?: TaskUncheckedUpdateManyWithoutCreatorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    projectMemberships?: ProjectMemberUncheckedUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationUncheckedUpdateManyWithoutUserNestedInput
  }
  export type TenantCreateWithoutProjectsInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutTenantInput
    tasks?: TaskCreateNestedManyWithoutTenantInput
    invites?: InviteCreateNestedManyWithoutTenantInput
    comments?: CommentCreateNestedManyWithoutTenantInput
    notifications?: NotificationCreateNestedManyWithoutTenantInput
    auditLogs?: AuditLogCreateNestedManyWithoutTenantInput
    projectMembers?: ProjectMemberCreateNestedManyWithoutTenantInput
  }
  export type TenantUncheckedCreateWithoutProjectsInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
    tasks?: TaskUncheckedCreateNestedManyWithoutTenantInput
    invites?: InviteUncheckedCreateNestedManyWithoutTenantInput
    comments?: CommentUncheckedCreateNestedManyWithoutTenantInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutTenantInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutTenantInput
    projectMembers?: ProjectMemberUncheckedCreateNestedManyWithoutTenantInput
  }
  export type TenantCreateOrConnectWithoutProjectsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutProjectsInput, TenantUncheckedCreateWithoutProjectsInput>
  }
  export type UserCreateWithoutCreatedProjectsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role?: $Enums.Role
    isActive?: boolean
    isVerified?: boolean
    totpSecret?: string | null
    totpEnabled?: boolean
    avatarUrl?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutUsersInput
    assignedTasks?: TaskCreateNestedManyWithoutAssigneeInput
    createdTasks?: TaskCreateNestedManyWithoutCreatorInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    projectMemberships?: ProjectMemberCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationCreateNestedManyWithoutUserInput
  }
  export type UserUncheckedCreateWithoutCreatedProjectsInput = {
    id?: string
    tenantId: string
    email: string
    passwordHash: string
    name: string
    role?: $Enums.Role
    isActive?: boolean
    isVerified?: boolean
    totpSecret?: string | null
    totpEnabled?: boolean
    avatarUrl?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTasks?: TaskUncheckedCreateNestedManyWithoutAssigneeInput
    createdTasks?: TaskUncheckedCreateNestedManyWithoutCreatorInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    projectMemberships?: ProjectMemberUncheckedCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationUncheckedCreateNestedManyWithoutUserInput
  }
  export type UserCreateOrConnectWithoutCreatedProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedProjectsInput, UserUncheckedCreateWithoutCreatedProjectsInput>
  }
  export type TaskCreateWithoutProjectInput = {
    id?: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    dueDate?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutTasksInput
    assignee?: UserCreateNestedOneWithoutAssignedTasksInput
    creator: UserCreateNestedOneWithoutCreatedTasksInput
  }
  export type TaskUncheckedCreateWithoutProjectInput = {
    id?: string
    tenantId: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    assigneeId?: string | null
    dueDate?: Date | string | null
    createdBy: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }
  export type TaskCreateOrConnectWithoutProjectInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput>
  }
  export type TaskCreateManyProjectInputEnvelope = {
    data: TaskCreateManyProjectInput | TaskCreateManyProjectInput[]
    skipDuplicates?: boolean
  }
  export type CommentCreateWithoutProjectInput = {
    id?: string
    text: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutRepliesInput
    replies?: CommentCreateNestedManyWithoutParentInput
  }
  export type CommentUncheckedCreateWithoutProjectInput = {
    id?: string
    tenantId: string
    userId: string
    parentId?: string | null
    text: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
  }
  export type CommentCreateOrConnectWithoutProjectInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutProjectInput, CommentUncheckedCreateWithoutProjectInput>
  }
  export type CommentCreateManyProjectInputEnvelope = {
    data: CommentCreateManyProjectInput | CommentCreateManyProjectInput[]
    skipDuplicates?: boolean
  }
  export type ProjectMemberCreateWithoutProjectInput = {
    id?: string
    role?: $Enums.Role
    createdAt?: Date | string
    tenant: TenantCreateNestedOneWithoutProjectMembersInput
    user: UserCreateNestedOneWithoutProjectMembershipsInput
  }
  export type ProjectMemberUncheckedCreateWithoutProjectInput = {
    id?: string
    tenantId: string
    userId: string
    role?: $Enums.Role
    createdAt?: Date | string
  }
  export type ProjectMemberCreateOrConnectWithoutProjectInput = {
    where: ProjectMemberWhereUniqueInput
    create: XOR<ProjectMemberCreateWithoutProjectInput, ProjectMemberUncheckedCreateWithoutProjectInput>
  }
  export type ProjectMemberCreateManyProjectInputEnvelope = {
    data: ProjectMemberCreateManyProjectInput | ProjectMemberCreateManyProjectInput[]
    skipDuplicates?: boolean
  }
  export type TenantUpsertWithoutProjectsInput = {
    update: XOR<TenantUpdateWithoutProjectsInput, TenantUncheckedUpdateWithoutProjectsInput>
    create: XOR<TenantCreateWithoutProjectsInput, TenantUncheckedCreateWithoutProjectsInput>
    where?: TenantWhereInput
  }
  export type TenantUpdateToOneWithWhereWithoutProjectsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutProjectsInput, TenantUncheckedUpdateWithoutProjectsInput>
  }
  export type TenantUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutTenantNestedInput
    tasks?: TaskUpdateManyWithoutTenantNestedInput
    invites?: InviteUpdateManyWithoutTenantNestedInput
    comments?: CommentUpdateManyWithoutTenantNestedInput
    notifications?: NotificationUpdateManyWithoutTenantNestedInput
    auditLogs?: AuditLogUpdateManyWithoutTenantNestedInput
    projectMembers?: ProjectMemberUpdateManyWithoutTenantNestedInput
  }
  export type TenantUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutTenantNestedInput
    invites?: InviteUncheckedUpdateManyWithoutTenantNestedInput
    comments?: CommentUncheckedUpdateManyWithoutTenantNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutTenantNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutTenantNestedInput
    projectMembers?: ProjectMemberUncheckedUpdateManyWithoutTenantNestedInput
  }
  export type UserUpsertWithoutCreatedProjectsInput = {
    update: XOR<UserUpdateWithoutCreatedProjectsInput, UserUncheckedUpdateWithoutCreatedProjectsInput>
    create: XOR<UserCreateWithoutCreatedProjectsInput, UserUncheckedCreateWithoutCreatedProjectsInput>
    where?: UserWhereInput
  }
  export type UserUpdateToOneWithWhereWithoutCreatedProjectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedProjectsInput, UserUncheckedUpdateWithoutCreatedProjectsInput>
  }
  export type UserUpdateWithoutCreatedProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    totpEnabled?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutUsersNestedInput
    assignedTasks?: TaskUpdateManyWithoutAssigneeNestedInput
    createdTasks?: TaskUpdateManyWithoutCreatorNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    projectMemberships?: ProjectMemberUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationUpdateManyWithoutUserNestedInput
  }
  export type UserUncheckedUpdateWithoutCreatedProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    totpEnabled?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTasks?: TaskUncheckedUpdateManyWithoutAssigneeNestedInput
    createdTasks?: TaskUncheckedUpdateManyWithoutCreatorNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    projectMemberships?: ProjectMemberUncheckedUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationUncheckedUpdateManyWithoutUserNestedInput
  }
  export type TaskUpsertWithWhereUniqueWithoutProjectInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutProjectInput, TaskUncheckedUpdateWithoutProjectInput>
    create: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput>
  }
  export type TaskUpdateWithWhereUniqueWithoutProjectInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutProjectInput, TaskUncheckedUpdateWithoutProjectInput>
  }
  export type TaskUpdateManyWithWhereWithoutProjectInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutProjectInput>
  }
  export type CommentUpsertWithWhereUniqueWithoutProjectInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutProjectInput, CommentUncheckedUpdateWithoutProjectInput>
    create: XOR<CommentCreateWithoutProjectInput, CommentUncheckedCreateWithoutProjectInput>
  }
  export type CommentUpdateWithWhereUniqueWithoutProjectInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutProjectInput, CommentUncheckedUpdateWithoutProjectInput>
  }
  export type CommentUpdateManyWithWhereWithoutProjectInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutProjectInput>
  }
  export type ProjectMemberUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectMemberWhereUniqueInput
    update: XOR<ProjectMemberUpdateWithoutProjectInput, ProjectMemberUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectMemberCreateWithoutProjectInput, ProjectMemberUncheckedCreateWithoutProjectInput>
  }
  export type ProjectMemberUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectMemberWhereUniqueInput
    data: XOR<ProjectMemberUpdateWithoutProjectInput, ProjectMemberUncheckedUpdateWithoutProjectInput>
  }
  export type ProjectMemberUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectMemberScalarWhereInput
    data: XOR<ProjectMemberUpdateManyMutationInput, ProjectMemberUncheckedUpdateManyWithoutProjectInput>
  }
  export type TenantCreateWithoutTasksInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutTenantInput
    projects?: ProjectCreateNestedManyWithoutTenantInput
    invites?: InviteCreateNestedManyWithoutTenantInput
    comments?: CommentCreateNestedManyWithoutTenantInput
    notifications?: NotificationCreateNestedManyWithoutTenantInput
    auditLogs?: AuditLogCreateNestedManyWithoutTenantInput
    projectMembers?: ProjectMemberCreateNestedManyWithoutTenantInput
  }
  export type TenantUncheckedCreateWithoutTasksInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
    projects?: ProjectUncheckedCreateNestedManyWithoutTenantInput
    invites?: InviteUncheckedCreateNestedManyWithoutTenantInput
    comments?: CommentUncheckedCreateNestedManyWithoutTenantInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutTenantInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutTenantInput
    projectMembers?: ProjectMemberUncheckedCreateNestedManyWithoutTenantInput
  }
  export type TenantCreateOrConnectWithoutTasksInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutTasksInput, TenantUncheckedCreateWithoutTasksInput>
  }
  export type ProjectCreateWithoutTasksInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.ProjectStatus
    startDate?: Date | string | null
    endDate?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutProjectsInput
    creator: UserCreateNestedOneWithoutCreatedProjectsInput
    comments?: CommentCreateNestedManyWithoutProjectInput
    members?: ProjectMemberCreateNestedManyWithoutProjectInput
  }
  export type ProjectUncheckedCreateWithoutTasksInput = {
    id?: string
    tenantId: string
    name: string
    description?: string | null
    status?: $Enums.ProjectStatus
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdBy: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutProjectInput
    members?: ProjectMemberUncheckedCreateNestedManyWithoutProjectInput
  }
  export type ProjectCreateOrConnectWithoutTasksInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
  }
  export type UserCreateWithoutAssignedTasksInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role?: $Enums.Role
    isActive?: boolean
    isVerified?: boolean
    totpSecret?: string | null
    totpEnabled?: boolean
    avatarUrl?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutUsersInput
    createdProjects?: ProjectCreateNestedManyWithoutCreatorInput
    createdTasks?: TaskCreateNestedManyWithoutCreatorInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    projectMemberships?: ProjectMemberCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationCreateNestedManyWithoutUserInput
  }
  export type UserUncheckedCreateWithoutAssignedTasksInput = {
    id?: string
    tenantId: string
    email: string
    passwordHash: string
    name: string
    role?: $Enums.Role
    isActive?: boolean
    isVerified?: boolean
    totpSecret?: string | null
    totpEnabled?: boolean
    avatarUrl?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdProjects?: ProjectUncheckedCreateNestedManyWithoutCreatorInput
    createdTasks?: TaskUncheckedCreateNestedManyWithoutCreatorInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    projectMemberships?: ProjectMemberUncheckedCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationUncheckedCreateNestedManyWithoutUserInput
  }
  export type UserCreateOrConnectWithoutAssignedTasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignedTasksInput, UserUncheckedCreateWithoutAssignedTasksInput>
  }
  export type UserCreateWithoutCreatedTasksInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role?: $Enums.Role
    isActive?: boolean
    isVerified?: boolean
    totpSecret?: string | null
    totpEnabled?: boolean
    avatarUrl?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutUsersInput
    createdProjects?: ProjectCreateNestedManyWithoutCreatorInput
    assignedTasks?: TaskCreateNestedManyWithoutAssigneeInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    projectMemberships?: ProjectMemberCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationCreateNestedManyWithoutUserInput
  }
  export type UserUncheckedCreateWithoutCreatedTasksInput = {
    id?: string
    tenantId: string
    email: string
    passwordHash: string
    name: string
    role?: $Enums.Role
    isActive?: boolean
    isVerified?: boolean
    totpSecret?: string | null
    totpEnabled?: boolean
    avatarUrl?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdProjects?: ProjectUncheckedCreateNestedManyWithoutCreatorInput
    assignedTasks?: TaskUncheckedCreateNestedManyWithoutAssigneeInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    projectMemberships?: ProjectMemberUncheckedCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationUncheckedCreateNestedManyWithoutUserInput
  }
  export type UserCreateOrConnectWithoutCreatedTasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedTasksInput, UserUncheckedCreateWithoutCreatedTasksInput>
  }
  export type TenantUpsertWithoutTasksInput = {
    update: XOR<TenantUpdateWithoutTasksInput, TenantUncheckedUpdateWithoutTasksInput>
    create: XOR<TenantCreateWithoutTasksInput, TenantUncheckedCreateWithoutTasksInput>
    where?: TenantWhereInput
  }
  export type TenantUpdateToOneWithWhereWithoutTasksInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutTasksInput, TenantUncheckedUpdateWithoutTasksInput>
  }
  export type TenantUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutTenantNestedInput
    projects?: ProjectUpdateManyWithoutTenantNestedInput
    invites?: InviteUpdateManyWithoutTenantNestedInput
    comments?: CommentUpdateManyWithoutTenantNestedInput
    notifications?: NotificationUpdateManyWithoutTenantNestedInput
    auditLogs?: AuditLogUpdateManyWithoutTenantNestedInput
    projectMembers?: ProjectMemberUpdateManyWithoutTenantNestedInput
  }
  export type TenantUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutTenantNestedInput
    invites?: InviteUncheckedUpdateManyWithoutTenantNestedInput
    comments?: CommentUncheckedUpdateManyWithoutTenantNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutTenantNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutTenantNestedInput
    projectMembers?: ProjectMemberUncheckedUpdateManyWithoutTenantNestedInput
  }
  export type ProjectUpsertWithoutTasksInput = {
    update: XOR<ProjectUpdateWithoutTasksInput, ProjectUncheckedUpdateWithoutTasksInput>
    create: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
    where?: ProjectWhereInput
  }
  export type ProjectUpdateToOneWithWhereWithoutTasksInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutTasksInput, ProjectUncheckedUpdateWithoutTasksInput>
  }
  export type ProjectUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutProjectsNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedProjectsNestedInput
    comments?: CommentUpdateManyWithoutProjectNestedInput
    members?: ProjectMemberUpdateManyWithoutProjectNestedInput
  }
  export type ProjectUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutProjectNestedInput
    members?: ProjectMemberUncheckedUpdateManyWithoutProjectNestedInput
  }
  export type UserUpsertWithoutAssignedTasksInput = {
    update: XOR<UserUpdateWithoutAssignedTasksInput, UserUncheckedUpdateWithoutAssignedTasksInput>
    create: XOR<UserCreateWithoutAssignedTasksInput, UserUncheckedCreateWithoutAssignedTasksInput>
    where?: UserWhereInput
  }
  export type UserUpdateToOneWithWhereWithoutAssignedTasksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssignedTasksInput, UserUncheckedUpdateWithoutAssignedTasksInput>
  }
  export type UserUpdateWithoutAssignedTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    totpEnabled?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutUsersNestedInput
    createdProjects?: ProjectUpdateManyWithoutCreatorNestedInput
    createdTasks?: TaskUpdateManyWithoutCreatorNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    projectMemberships?: ProjectMemberUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationUpdateManyWithoutUserNestedInput
  }
  export type UserUncheckedUpdateWithoutAssignedTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    totpEnabled?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdProjects?: ProjectUncheckedUpdateManyWithoutCreatorNestedInput
    createdTasks?: TaskUncheckedUpdateManyWithoutCreatorNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    projectMemberships?: ProjectMemberUncheckedUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationUncheckedUpdateManyWithoutUserNestedInput
  }
  export type UserUpsertWithoutCreatedTasksInput = {
    update: XOR<UserUpdateWithoutCreatedTasksInput, UserUncheckedUpdateWithoutCreatedTasksInput>
    create: XOR<UserCreateWithoutCreatedTasksInput, UserUncheckedCreateWithoutCreatedTasksInput>
    where?: UserWhereInput
  }
  export type UserUpdateToOneWithWhereWithoutCreatedTasksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedTasksInput, UserUncheckedUpdateWithoutCreatedTasksInput>
  }
  export type UserUpdateWithoutCreatedTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    totpEnabled?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutUsersNestedInput
    createdProjects?: ProjectUpdateManyWithoutCreatorNestedInput
    assignedTasks?: TaskUpdateManyWithoutAssigneeNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    projectMemberships?: ProjectMemberUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationUpdateManyWithoutUserNestedInput
  }
  export type UserUncheckedUpdateWithoutCreatedTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    totpEnabled?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdProjects?: ProjectUncheckedUpdateManyWithoutCreatorNestedInput
    assignedTasks?: TaskUncheckedUpdateManyWithoutAssigneeNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    projectMemberships?: ProjectMemberUncheckedUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationUncheckedUpdateManyWithoutUserNestedInput
  }
  export type TenantCreateWithoutCommentsInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutTenantInput
    projects?: ProjectCreateNestedManyWithoutTenantInput
    tasks?: TaskCreateNestedManyWithoutTenantInput
    invites?: InviteCreateNestedManyWithoutTenantInput
    notifications?: NotificationCreateNestedManyWithoutTenantInput
    auditLogs?: AuditLogCreateNestedManyWithoutTenantInput
    projectMembers?: ProjectMemberCreateNestedManyWithoutTenantInput
  }
  export type TenantUncheckedCreateWithoutCommentsInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
    projects?: ProjectUncheckedCreateNestedManyWithoutTenantInput
    tasks?: TaskUncheckedCreateNestedManyWithoutTenantInput
    invites?: InviteUncheckedCreateNestedManyWithoutTenantInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutTenantInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutTenantInput
    projectMembers?: ProjectMemberUncheckedCreateNestedManyWithoutTenantInput
  }
  export type TenantCreateOrConnectWithoutCommentsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutCommentsInput, TenantUncheckedCreateWithoutCommentsInput>
  }
  export type ProjectCreateWithoutCommentsInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.ProjectStatus
    startDate?: Date | string | null
    endDate?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutProjectsInput
    creator: UserCreateNestedOneWithoutCreatedProjectsInput
    tasks?: TaskCreateNestedManyWithoutProjectInput
    members?: ProjectMemberCreateNestedManyWithoutProjectInput
  }
  export type ProjectUncheckedCreateWithoutCommentsInput = {
    id?: string
    tenantId: string
    name: string
    description?: string | null
    status?: $Enums.ProjectStatus
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdBy: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput
    members?: ProjectMemberUncheckedCreateNestedManyWithoutProjectInput
  }
  export type ProjectCreateOrConnectWithoutCommentsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutCommentsInput, ProjectUncheckedCreateWithoutCommentsInput>
  }
  export type UserCreateWithoutCommentsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role?: $Enums.Role
    isActive?: boolean
    isVerified?: boolean
    totpSecret?: string | null
    totpEnabled?: boolean
    avatarUrl?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutUsersInput
    createdProjects?: ProjectCreateNestedManyWithoutCreatorInput
    assignedTasks?: TaskCreateNestedManyWithoutAssigneeInput
    createdTasks?: TaskCreateNestedManyWithoutCreatorInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    projectMemberships?: ProjectMemberCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationCreateNestedManyWithoutUserInput
  }
  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: string
    tenantId: string
    email: string
    passwordHash: string
    name: string
    role?: $Enums.Role
    isActive?: boolean
    isVerified?: boolean
    totpSecret?: string | null
    totpEnabled?: boolean
    avatarUrl?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdProjects?: ProjectUncheckedCreateNestedManyWithoutCreatorInput
    assignedTasks?: TaskUncheckedCreateNestedManyWithoutAssigneeInput
    createdTasks?: TaskUncheckedCreateNestedManyWithoutCreatorInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    projectMemberships?: ProjectMemberUncheckedCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationUncheckedCreateNestedManyWithoutUserInput
  }
  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }
  export type CommentCreateWithoutRepliesInput = {
    id?: string
    text: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutCommentsInput
    project: ProjectCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutRepliesInput
  }
  export type CommentUncheckedCreateWithoutRepliesInput = {
    id?: string
    tenantId: string
    projectId: string
    userId: string
    parentId?: string | null
    text: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }
  export type CommentCreateOrConnectWithoutRepliesInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
  }
  export type CommentCreateWithoutParentInput = {
    id?: string
    text: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutCommentsInput
    project: ProjectCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutCommentsInput
    replies?: CommentCreateNestedManyWithoutParentInput
  }
  export type CommentUncheckedCreateWithoutParentInput = {
    id?: string
    tenantId: string
    projectId: string
    userId: string
    text: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
  }
  export type CommentCreateOrConnectWithoutParentInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput>
  }
  export type CommentCreateManyParentInputEnvelope = {
    data: CommentCreateManyParentInput | CommentCreateManyParentInput[]
    skipDuplicates?: boolean
  }
  export type TenantUpsertWithoutCommentsInput = {
    update: XOR<TenantUpdateWithoutCommentsInput, TenantUncheckedUpdateWithoutCommentsInput>
    create: XOR<TenantCreateWithoutCommentsInput, TenantUncheckedCreateWithoutCommentsInput>
    where?: TenantWhereInput
  }
  export type TenantUpdateToOneWithWhereWithoutCommentsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutCommentsInput, TenantUncheckedUpdateWithoutCommentsInput>
  }
  export type TenantUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutTenantNestedInput
    projects?: ProjectUpdateManyWithoutTenantNestedInput
    tasks?: TaskUpdateManyWithoutTenantNestedInput
    invites?: InviteUpdateManyWithoutTenantNestedInput
    notifications?: NotificationUpdateManyWithoutTenantNestedInput
    auditLogs?: AuditLogUpdateManyWithoutTenantNestedInput
    projectMembers?: ProjectMemberUpdateManyWithoutTenantNestedInput
  }
  export type TenantUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutTenantNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutTenantNestedInput
    invites?: InviteUncheckedUpdateManyWithoutTenantNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutTenantNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutTenantNestedInput
    projectMembers?: ProjectMemberUncheckedUpdateManyWithoutTenantNestedInput
  }
  export type ProjectUpsertWithoutCommentsInput = {
    update: XOR<ProjectUpdateWithoutCommentsInput, ProjectUncheckedUpdateWithoutCommentsInput>
    create: XOR<ProjectCreateWithoutCommentsInput, ProjectUncheckedCreateWithoutCommentsInput>
    where?: ProjectWhereInput
  }
  export type ProjectUpdateToOneWithWhereWithoutCommentsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutCommentsInput, ProjectUncheckedUpdateWithoutCommentsInput>
  }
  export type ProjectUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutProjectsNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedProjectsNestedInput
    tasks?: TaskUpdateManyWithoutProjectNestedInput
    members?: ProjectMemberUpdateManyWithoutProjectNestedInput
  }
  export type ProjectUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutProjectNestedInput
    members?: ProjectMemberUncheckedUpdateManyWithoutProjectNestedInput
  }
  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }
  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }
  export type UserUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    totpEnabled?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutUsersNestedInput
    createdProjects?: ProjectUpdateManyWithoutCreatorNestedInput
    assignedTasks?: TaskUpdateManyWithoutAssigneeNestedInput
    createdTasks?: TaskUpdateManyWithoutCreatorNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    projectMemberships?: ProjectMemberUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationUpdateManyWithoutUserNestedInput
  }
  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    totpEnabled?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdProjects?: ProjectUncheckedUpdateManyWithoutCreatorNestedInput
    assignedTasks?: TaskUncheckedUpdateManyWithoutAssigneeNestedInput
    createdTasks?: TaskUncheckedUpdateManyWithoutCreatorNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    projectMemberships?: ProjectMemberUncheckedUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationUncheckedUpdateManyWithoutUserNestedInput
  }
  export type CommentUpsertWithoutRepliesInput = {
    update: XOR<CommentUpdateWithoutRepliesInput, CommentUncheckedUpdateWithoutRepliesInput>
    create: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
    where?: CommentWhereInput
  }
  export type CommentUpdateToOneWithWhereWithoutRepliesInput = {
    where?: CommentWhereInput
    data: XOR<CommentUpdateWithoutRepliesInput, CommentUncheckedUpdateWithoutRepliesInput>
  }
  export type CommentUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutCommentsNestedInput
    project?: ProjectUpdateOneRequiredWithoutCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
    parent?: CommentUpdateOneWithoutRepliesNestedInput
  }
  export type CommentUncheckedUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    text?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type CommentUpsertWithWhereUniqueWithoutParentInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutParentInput, CommentUncheckedUpdateWithoutParentInput>
    create: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput>
  }
  export type CommentUpdateWithWhereUniqueWithoutParentInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutParentInput, CommentUncheckedUpdateWithoutParentInput>
  }
  export type CommentUpdateManyWithWhereWithoutParentInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutParentInput>
  }
  export type TenantCreateWithoutInvitesInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutTenantInput
    projects?: ProjectCreateNestedManyWithoutTenantInput
    tasks?: TaskCreateNestedManyWithoutTenantInput
    comments?: CommentCreateNestedManyWithoutTenantInput
    notifications?: NotificationCreateNestedManyWithoutTenantInput
    auditLogs?: AuditLogCreateNestedManyWithoutTenantInput
    projectMembers?: ProjectMemberCreateNestedManyWithoutTenantInput
  }
  export type TenantUncheckedCreateWithoutInvitesInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
    projects?: ProjectUncheckedCreateNestedManyWithoutTenantInput
    tasks?: TaskUncheckedCreateNestedManyWithoutTenantInput
    comments?: CommentUncheckedCreateNestedManyWithoutTenantInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutTenantInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutTenantInput
    projectMembers?: ProjectMemberUncheckedCreateNestedManyWithoutTenantInput
  }
  export type TenantCreateOrConnectWithoutInvitesInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutInvitesInput, TenantUncheckedCreateWithoutInvitesInput>
  }
  export type TenantUpsertWithoutInvitesInput = {
    update: XOR<TenantUpdateWithoutInvitesInput, TenantUncheckedUpdateWithoutInvitesInput>
    create: XOR<TenantCreateWithoutInvitesInput, TenantUncheckedCreateWithoutInvitesInput>
    where?: TenantWhereInput
  }
  export type TenantUpdateToOneWithWhereWithoutInvitesInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutInvitesInput, TenantUncheckedUpdateWithoutInvitesInput>
  }
  export type TenantUpdateWithoutInvitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutTenantNestedInput
    projects?: ProjectUpdateManyWithoutTenantNestedInput
    tasks?: TaskUpdateManyWithoutTenantNestedInput
    comments?: CommentUpdateManyWithoutTenantNestedInput
    notifications?: NotificationUpdateManyWithoutTenantNestedInput
    auditLogs?: AuditLogUpdateManyWithoutTenantNestedInput
    projectMembers?: ProjectMemberUpdateManyWithoutTenantNestedInput
  }
  export type TenantUncheckedUpdateWithoutInvitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutTenantNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutTenantNestedInput
    comments?: CommentUncheckedUpdateManyWithoutTenantNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutTenantNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutTenantNestedInput
    projectMembers?: ProjectMemberUncheckedUpdateManyWithoutTenantNestedInput
  }
  export type TenantCreateWithoutProjectMembersInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutTenantInput
    projects?: ProjectCreateNestedManyWithoutTenantInput
    tasks?: TaskCreateNestedManyWithoutTenantInput
    invites?: InviteCreateNestedManyWithoutTenantInput
    comments?: CommentCreateNestedManyWithoutTenantInput
    notifications?: NotificationCreateNestedManyWithoutTenantInput
    auditLogs?: AuditLogCreateNestedManyWithoutTenantInput
  }
  export type TenantUncheckedCreateWithoutProjectMembersInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
    projects?: ProjectUncheckedCreateNestedManyWithoutTenantInput
    tasks?: TaskUncheckedCreateNestedManyWithoutTenantInput
    invites?: InviteUncheckedCreateNestedManyWithoutTenantInput
    comments?: CommentUncheckedCreateNestedManyWithoutTenantInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutTenantInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutTenantInput
  }
  export type TenantCreateOrConnectWithoutProjectMembersInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutProjectMembersInput, TenantUncheckedCreateWithoutProjectMembersInput>
  }
  export type UserCreateWithoutProjectMembershipsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role?: $Enums.Role
    isActive?: boolean
    isVerified?: boolean
    totpSecret?: string | null
    totpEnabled?: boolean
    avatarUrl?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutUsersInput
    createdProjects?: ProjectCreateNestedManyWithoutCreatorInput
    assignedTasks?: TaskCreateNestedManyWithoutAssigneeInput
    createdTasks?: TaskCreateNestedManyWithoutCreatorInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationCreateNestedManyWithoutUserInput
  }
  export type UserUncheckedCreateWithoutProjectMembershipsInput = {
    id?: string
    tenantId: string
    email: string
    passwordHash: string
    name: string
    role?: $Enums.Role
    isActive?: boolean
    isVerified?: boolean
    totpSecret?: string | null
    totpEnabled?: boolean
    avatarUrl?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdProjects?: ProjectUncheckedCreateNestedManyWithoutCreatorInput
    assignedTasks?: TaskUncheckedCreateNestedManyWithoutAssigneeInput
    createdTasks?: TaskUncheckedCreateNestedManyWithoutCreatorInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationUncheckedCreateNestedManyWithoutUserInput
  }
  export type UserCreateOrConnectWithoutProjectMembershipsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectMembershipsInput, UserUncheckedCreateWithoutProjectMembershipsInput>
  }
  export type ProjectCreateWithoutMembersInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.ProjectStatus
    startDate?: Date | string | null
    endDate?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutProjectsInput
    creator: UserCreateNestedOneWithoutCreatedProjectsInput
    tasks?: TaskCreateNestedManyWithoutProjectInput
    comments?: CommentCreateNestedManyWithoutProjectInput
  }
  export type ProjectUncheckedCreateWithoutMembersInput = {
    id?: string
    tenantId: string
    name: string
    description?: string | null
    status?: $Enums.ProjectStatus
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdBy: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput
    comments?: CommentUncheckedCreateNestedManyWithoutProjectInput
  }
  export type ProjectCreateOrConnectWithoutMembersInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutMembersInput, ProjectUncheckedCreateWithoutMembersInput>
  }
  export type TenantUpsertWithoutProjectMembersInput = {
    update: XOR<TenantUpdateWithoutProjectMembersInput, TenantUncheckedUpdateWithoutProjectMembersInput>
    create: XOR<TenantCreateWithoutProjectMembersInput, TenantUncheckedCreateWithoutProjectMembersInput>
    where?: TenantWhereInput
  }
  export type TenantUpdateToOneWithWhereWithoutProjectMembersInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutProjectMembersInput, TenantUncheckedUpdateWithoutProjectMembersInput>
  }
  export type TenantUpdateWithoutProjectMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutTenantNestedInput
    projects?: ProjectUpdateManyWithoutTenantNestedInput
    tasks?: TaskUpdateManyWithoutTenantNestedInput
    invites?: InviteUpdateManyWithoutTenantNestedInput
    comments?: CommentUpdateManyWithoutTenantNestedInput
    notifications?: NotificationUpdateManyWithoutTenantNestedInput
    auditLogs?: AuditLogUpdateManyWithoutTenantNestedInput
  }
  export type TenantUncheckedUpdateWithoutProjectMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutTenantNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutTenantNestedInput
    invites?: InviteUncheckedUpdateManyWithoutTenantNestedInput
    comments?: CommentUncheckedUpdateManyWithoutTenantNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutTenantNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutTenantNestedInput
  }
  export type UserUpsertWithoutProjectMembershipsInput = {
    update: XOR<UserUpdateWithoutProjectMembershipsInput, UserUncheckedUpdateWithoutProjectMembershipsInput>
    create: XOR<UserCreateWithoutProjectMembershipsInput, UserUncheckedCreateWithoutProjectMembershipsInput>
    where?: UserWhereInput
  }
  export type UserUpdateToOneWithWhereWithoutProjectMembershipsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectMembershipsInput, UserUncheckedUpdateWithoutProjectMembershipsInput>
  }
  export type UserUpdateWithoutProjectMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    totpEnabled?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutUsersNestedInput
    createdProjects?: ProjectUpdateManyWithoutCreatorNestedInput
    assignedTasks?: TaskUpdateManyWithoutAssigneeNestedInput
    createdTasks?: TaskUpdateManyWithoutCreatorNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationUpdateManyWithoutUserNestedInput
  }
  export type UserUncheckedUpdateWithoutProjectMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    totpEnabled?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdProjects?: ProjectUncheckedUpdateManyWithoutCreatorNestedInput
    assignedTasks?: TaskUncheckedUpdateManyWithoutAssigneeNestedInput
    createdTasks?: TaskUncheckedUpdateManyWithoutCreatorNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationUncheckedUpdateManyWithoutUserNestedInput
  }
  export type ProjectUpsertWithoutMembersInput = {
    update: XOR<ProjectUpdateWithoutMembersInput, ProjectUncheckedUpdateWithoutMembersInput>
    create: XOR<ProjectCreateWithoutMembersInput, ProjectUncheckedCreateWithoutMembersInput>
    where?: ProjectWhereInput
  }
  export type ProjectUpdateToOneWithWhereWithoutMembersInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutMembersInput, ProjectUncheckedUpdateWithoutMembersInput>
  }
  export type ProjectUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutProjectsNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedProjectsNestedInput
    tasks?: TaskUpdateManyWithoutProjectNestedInput
    comments?: CommentUpdateManyWithoutProjectNestedInput
  }
  export type ProjectUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutProjectNestedInput
    comments?: CommentUncheckedUpdateManyWithoutProjectNestedInput
  }
  export type TenantCreateWithoutAuditLogsInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutTenantInput
    projects?: ProjectCreateNestedManyWithoutTenantInput
    tasks?: TaskCreateNestedManyWithoutTenantInput
    invites?: InviteCreateNestedManyWithoutTenantInput
    comments?: CommentCreateNestedManyWithoutTenantInput
    notifications?: NotificationCreateNestedManyWithoutTenantInput
    projectMembers?: ProjectMemberCreateNestedManyWithoutTenantInput
  }
  export type TenantUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
    projects?: ProjectUncheckedCreateNestedManyWithoutTenantInput
    tasks?: TaskUncheckedCreateNestedManyWithoutTenantInput
    invites?: InviteUncheckedCreateNestedManyWithoutTenantInput
    comments?: CommentUncheckedCreateNestedManyWithoutTenantInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutTenantInput
    projectMembers?: ProjectMemberUncheckedCreateNestedManyWithoutTenantInput
  }
  export type TenantCreateOrConnectWithoutAuditLogsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutAuditLogsInput, TenantUncheckedCreateWithoutAuditLogsInput>
  }
  export type UserCreateWithoutAuditLogsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role?: $Enums.Role
    isActive?: boolean
    isVerified?: boolean
    totpSecret?: string | null
    totpEnabled?: boolean
    avatarUrl?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutUsersInput
    createdProjects?: ProjectCreateNestedManyWithoutCreatorInput
    assignedTasks?: TaskCreateNestedManyWithoutAssigneeInput
    createdTasks?: TaskCreateNestedManyWithoutCreatorInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    projectMemberships?: ProjectMemberCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationCreateNestedManyWithoutUserInput
  }
  export type UserUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    tenantId: string
    email: string
    passwordHash: string
    name: string
    role?: $Enums.Role
    isActive?: boolean
    isVerified?: boolean
    totpSecret?: string | null
    totpEnabled?: boolean
    avatarUrl?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdProjects?: ProjectUncheckedCreateNestedManyWithoutCreatorInput
    assignedTasks?: TaskUncheckedCreateNestedManyWithoutAssigneeInput
    createdTasks?: TaskUncheckedCreateNestedManyWithoutCreatorInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    projectMemberships?: ProjectMemberUncheckedCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationUncheckedCreateNestedManyWithoutUserInput
  }
  export type UserCreateOrConnectWithoutAuditLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
  }
  export type TenantUpsertWithoutAuditLogsInput = {
    update: XOR<TenantUpdateWithoutAuditLogsInput, TenantUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<TenantCreateWithoutAuditLogsInput, TenantUncheckedCreateWithoutAuditLogsInput>
    where?: TenantWhereInput
  }
  export type TenantUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutAuditLogsInput, TenantUncheckedUpdateWithoutAuditLogsInput>
  }
  export type TenantUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutTenantNestedInput
    projects?: ProjectUpdateManyWithoutTenantNestedInput
    tasks?: TaskUpdateManyWithoutTenantNestedInput
    invites?: InviteUpdateManyWithoutTenantNestedInput
    comments?: CommentUpdateManyWithoutTenantNestedInput
    notifications?: NotificationUpdateManyWithoutTenantNestedInput
    projectMembers?: ProjectMemberUpdateManyWithoutTenantNestedInput
  }
  export type TenantUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutTenantNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutTenantNestedInput
    invites?: InviteUncheckedUpdateManyWithoutTenantNestedInput
    comments?: CommentUncheckedUpdateManyWithoutTenantNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutTenantNestedInput
    projectMembers?: ProjectMemberUncheckedUpdateManyWithoutTenantNestedInput
  }
  export type UserUpsertWithoutAuditLogsInput = {
    update: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    where?: UserWhereInput
  }
  export type UserUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
  }
  export type UserUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    totpEnabled?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutUsersNestedInput
    createdProjects?: ProjectUpdateManyWithoutCreatorNestedInput
    assignedTasks?: TaskUpdateManyWithoutAssigneeNestedInput
    createdTasks?: TaskUpdateManyWithoutCreatorNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    projectMemberships?: ProjectMemberUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationUpdateManyWithoutUserNestedInput
  }
  export type UserUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    totpEnabled?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdProjects?: ProjectUncheckedUpdateManyWithoutCreatorNestedInput
    assignedTasks?: TaskUncheckedUpdateManyWithoutAssigneeNestedInput
    createdTasks?: TaskUncheckedUpdateManyWithoutCreatorNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    projectMemberships?: ProjectMemberUncheckedUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationUncheckedUpdateManyWithoutUserNestedInput
  }
  export type TenantCreateWithoutNotificationsInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutTenantInput
    projects?: ProjectCreateNestedManyWithoutTenantInput
    tasks?: TaskCreateNestedManyWithoutTenantInput
    invites?: InviteCreateNestedManyWithoutTenantInput
    comments?: CommentCreateNestedManyWithoutTenantInput
    auditLogs?: AuditLogCreateNestedManyWithoutTenantInput
    projectMembers?: ProjectMemberCreateNestedManyWithoutTenantInput
  }
  export type TenantUncheckedCreateWithoutNotificationsInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
    projects?: ProjectUncheckedCreateNestedManyWithoutTenantInput
    tasks?: TaskUncheckedCreateNestedManyWithoutTenantInput
    invites?: InviteUncheckedCreateNestedManyWithoutTenantInput
    comments?: CommentUncheckedCreateNestedManyWithoutTenantInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutTenantInput
    projectMembers?: ProjectMemberUncheckedCreateNestedManyWithoutTenantInput
  }
  export type TenantCreateOrConnectWithoutNotificationsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutNotificationsInput, TenantUncheckedCreateWithoutNotificationsInput>
  }
  export type UserCreateWithoutNotificationsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role?: $Enums.Role
    isActive?: boolean
    isVerified?: boolean
    totpSecret?: string | null
    totpEnabled?: boolean
    avatarUrl?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutUsersInput
    createdProjects?: ProjectCreateNestedManyWithoutCreatorInput
    assignedTasks?: TaskCreateNestedManyWithoutAssigneeInput
    createdTasks?: TaskCreateNestedManyWithoutCreatorInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    projectMemberships?: ProjectMemberCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationCreateNestedManyWithoutUserInput
  }
  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    tenantId: string
    email: string
    passwordHash: string
    name: string
    role?: $Enums.Role
    isActive?: boolean
    isVerified?: boolean
    totpSecret?: string | null
    totpEnabled?: boolean
    avatarUrl?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdProjects?: ProjectUncheckedCreateNestedManyWithoutCreatorInput
    assignedTasks?: TaskUncheckedCreateNestedManyWithoutAssigneeInput
    createdTasks?: TaskUncheckedCreateNestedManyWithoutCreatorInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    projectMemberships?: ProjectMemberUncheckedCreateNestedManyWithoutUserInput
    emailVerifications?: EmailVerificationUncheckedCreateNestedManyWithoutUserInput
  }
  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }
  export type TenantUpsertWithoutNotificationsInput = {
    update: XOR<TenantUpdateWithoutNotificationsInput, TenantUncheckedUpdateWithoutNotificationsInput>
    create: XOR<TenantCreateWithoutNotificationsInput, TenantUncheckedCreateWithoutNotificationsInput>
    where?: TenantWhereInput
  }
  export type TenantUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutNotificationsInput, TenantUncheckedUpdateWithoutNotificationsInput>
  }
  export type TenantUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutTenantNestedInput
    projects?: ProjectUpdateManyWithoutTenantNestedInput
    tasks?: TaskUpdateManyWithoutTenantNestedInput
    invites?: InviteUpdateManyWithoutTenantNestedInput
    comments?: CommentUpdateManyWithoutTenantNestedInput
    auditLogs?: AuditLogUpdateManyWithoutTenantNestedInput
    projectMembers?: ProjectMemberUpdateManyWithoutTenantNestedInput
  }
  export type TenantUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutTenantNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutTenantNestedInput
    invites?: InviteUncheckedUpdateManyWithoutTenantNestedInput
    comments?: CommentUncheckedUpdateManyWithoutTenantNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutTenantNestedInput
    projectMembers?: ProjectMemberUncheckedUpdateManyWithoutTenantNestedInput
  }
  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }
  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }
  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    totpEnabled?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutUsersNestedInput
    createdProjects?: ProjectUpdateManyWithoutCreatorNestedInput
    assignedTasks?: TaskUpdateManyWithoutAssigneeNestedInput
    createdTasks?: TaskUpdateManyWithoutCreatorNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    projectMemberships?: ProjectMemberUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationUpdateManyWithoutUserNestedInput
  }
  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    totpEnabled?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdProjects?: ProjectUncheckedUpdateManyWithoutCreatorNestedInput
    assignedTasks?: TaskUncheckedUpdateManyWithoutAssigneeNestedInput
    createdTasks?: TaskUncheckedUpdateManyWithoutCreatorNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    projectMemberships?: ProjectMemberUncheckedUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationUncheckedUpdateManyWithoutUserNestedInput
  }
  export type UserCreateWithoutEmailVerificationsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role?: $Enums.Role
    isActive?: boolean
    isVerified?: boolean
    totpSecret?: string | null
    totpEnabled?: boolean
    avatarUrl?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutUsersInput
    createdProjects?: ProjectCreateNestedManyWithoutCreatorInput
    assignedTasks?: TaskCreateNestedManyWithoutAssigneeInput
    createdTasks?: TaskCreateNestedManyWithoutCreatorInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    projectMemberships?: ProjectMemberCreateNestedManyWithoutUserInput
  }
  export type UserUncheckedCreateWithoutEmailVerificationsInput = {
    id?: string
    tenantId: string
    email: string
    passwordHash: string
    name: string
    role?: $Enums.Role
    isActive?: boolean
    isVerified?: boolean
    totpSecret?: string | null
    totpEnabled?: boolean
    avatarUrl?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdProjects?: ProjectUncheckedCreateNestedManyWithoutCreatorInput
    assignedTasks?: TaskUncheckedCreateNestedManyWithoutAssigneeInput
    createdTasks?: TaskUncheckedCreateNestedManyWithoutCreatorInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    projectMemberships?: ProjectMemberUncheckedCreateNestedManyWithoutUserInput
  }
  export type UserCreateOrConnectWithoutEmailVerificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEmailVerificationsInput, UserUncheckedCreateWithoutEmailVerificationsInput>
  }
  export type UserUpsertWithoutEmailVerificationsInput = {
    update: XOR<UserUpdateWithoutEmailVerificationsInput, UserUncheckedUpdateWithoutEmailVerificationsInput>
    create: XOR<UserCreateWithoutEmailVerificationsInput, UserUncheckedCreateWithoutEmailVerificationsInput>
    where?: UserWhereInput
  }
  export type UserUpdateToOneWithWhereWithoutEmailVerificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEmailVerificationsInput, UserUncheckedUpdateWithoutEmailVerificationsInput>
  }
  export type UserUpdateWithoutEmailVerificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    totpEnabled?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutUsersNestedInput
    createdProjects?: ProjectUpdateManyWithoutCreatorNestedInput
    assignedTasks?: TaskUpdateManyWithoutAssigneeNestedInput
    createdTasks?: TaskUpdateManyWithoutCreatorNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    projectMemberships?: ProjectMemberUpdateManyWithoutUserNestedInput
  }
  export type UserUncheckedUpdateWithoutEmailVerificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    totpEnabled?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdProjects?: ProjectUncheckedUpdateManyWithoutCreatorNestedInput
    assignedTasks?: TaskUncheckedUpdateManyWithoutAssigneeNestedInput
    createdTasks?: TaskUncheckedUpdateManyWithoutCreatorNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    projectMemberships?: ProjectMemberUncheckedUpdateManyWithoutUserNestedInput
  }
  export type ProjectCreateManyCreatorInput = {
    id?: string
    tenantId: string
    name: string
    description?: string | null
    status?: $Enums.ProjectStatus
    startDate?: Date | string | null
    endDate?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }
  export type TaskCreateManyAssigneeInput = {
    id?: string
    tenantId: string
    projectId: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    dueDate?: Date | string | null
    createdBy: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }
  export type TaskCreateManyCreatorInput = {
    id?: string
    tenantId: string
    projectId: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    assigneeId?: string | null
    dueDate?: Date | string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }
  export type RefreshTokenCreateManyUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }
  export type CommentCreateManyUserInput = {
    id?: string
    tenantId: string
    projectId: string
    parentId?: string | null
    text: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }
  export type NotificationCreateManyUserInput = {
    id?: string
    tenantId: string
    type: $Enums.NotificationType
    message: string
    link?: string | null
    isRead?: boolean
    createdAt?: Date | string
  }
  export type AuditLogCreateManyUserInput = {
    id?: string
    tenantId: string
    entityType: $Enums.AuditEntityType
    entityId: string
    action: $Enums.AuditAction
    changes: JsonNullValueInput | InputJsonValue
    timestamp?: Date | string
  }
  export type ProjectMemberCreateManyUserInput = {
    id?: string
    tenantId: string
    projectId: string
    role?: $Enums.Role
    createdAt?: Date | string
  }
  export type EmailVerificationCreateManyUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }
  export type ProjectUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutProjectsNestedInput
    tasks?: TaskUpdateManyWithoutProjectNestedInput
    comments?: CommentUpdateManyWithoutProjectNestedInput
    members?: ProjectMemberUpdateManyWithoutProjectNestedInput
  }
  export type ProjectUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutProjectNestedInput
    comments?: CommentUncheckedUpdateManyWithoutProjectNestedInput
    members?: ProjectMemberUncheckedUpdateManyWithoutProjectNestedInput
  }
  export type ProjectUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type TaskUpdateWithoutAssigneeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutTasksNestedInput
    project?: ProjectUpdateOneRequiredWithoutTasksNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedTasksNestedInput
  }
  export type TaskUncheckedUpdateWithoutAssigneeInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type TaskUncheckedUpdateManyWithoutAssigneeInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type TaskUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutTasksNestedInput
    project?: ProjectUpdateOneRequiredWithoutTasksNestedInput
    assignee?: UserUpdateOneWithoutAssignedTasksNestedInput
  }
  export type TaskUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type TaskUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type RefreshTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type RefreshTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type RefreshTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type CommentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutCommentsNestedInput
    project?: ProjectUpdateOneRequiredWithoutCommentsNestedInput
    parent?: CommentUpdateOneWithoutRepliesNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
  }
  export type CommentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    text?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
  }
  export type CommentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    text?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutNotificationsNestedInput
  }
  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type AuditLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityType?: EnumAuditEntityTypeFieldUpdateOperationsInput | $Enums.AuditEntityType
    entityId?: StringFieldUpdateOperationsInput | string
    action?: EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction
    changes?: JsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutAuditLogsNestedInput
  }
  export type AuditLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    entityType?: EnumAuditEntityTypeFieldUpdateOperationsInput | $Enums.AuditEntityType
    entityId?: StringFieldUpdateOperationsInput | string
    action?: EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction
    changes?: JsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type AuditLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    entityType?: EnumAuditEntityTypeFieldUpdateOperationsInput | $Enums.AuditEntityType
    entityId?: StringFieldUpdateOperationsInput | string
    action?: EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction
    changes?: JsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type ProjectMemberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutProjectMembersNestedInput
    project?: ProjectUpdateOneRequiredWithoutMembersNestedInput
  }
  export type ProjectMemberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type ProjectMemberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type EmailVerificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type EmailVerificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type EmailVerificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type UserCreateManyTenantInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    role?: $Enums.Role
    isActive?: boolean
    isVerified?: boolean
    totpSecret?: string | null
    totpEnabled?: boolean
    avatarUrl?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }
  export type ProjectCreateManyTenantInput = {
    id?: string
    name: string
    description?: string | null
    status?: $Enums.ProjectStatus
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdBy: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }
  export type TaskCreateManyTenantInput = {
    id?: string
    projectId: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    assigneeId?: string | null
    dueDate?: Date | string | null
    createdBy: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }
  export type InviteCreateManyTenantInput = {
    id?: string
    email: string
    role?: $Enums.Role
    token: string
    status?: $Enums.InviteStatus
    expiresAt: Date | string
    createdAt?: Date | string
  }
  export type CommentCreateManyTenantInput = {
    id?: string
    projectId: string
    userId: string
    parentId?: string | null
    text: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }
  export type NotificationCreateManyTenantInput = {
    id?: string
    userId: string
    type: $Enums.NotificationType
    message: string
    link?: string | null
    isRead?: boolean
    createdAt?: Date | string
  }
  export type AuditLogCreateManyTenantInput = {
    id?: string
    userId: string
    entityType: $Enums.AuditEntityType
    entityId: string
    action: $Enums.AuditAction
    changes: JsonNullValueInput | InputJsonValue
    timestamp?: Date | string
  }
  export type ProjectMemberCreateManyTenantInput = {
    id?: string
    userId: string
    projectId: string
    role?: $Enums.Role
    createdAt?: Date | string
  }
  export type UserUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    totpEnabled?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdProjects?: ProjectUpdateManyWithoutCreatorNestedInput
    assignedTasks?: TaskUpdateManyWithoutAssigneeNestedInput
    createdTasks?: TaskUpdateManyWithoutCreatorNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    projectMemberships?: ProjectMemberUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationUpdateManyWithoutUserNestedInput
  }
  export type UserUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    totpEnabled?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdProjects?: ProjectUncheckedUpdateManyWithoutCreatorNestedInput
    assignedTasks?: TaskUncheckedUpdateManyWithoutAssigneeNestedInput
    createdTasks?: TaskUncheckedUpdateManyWithoutCreatorNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    projectMemberships?: ProjectMemberUncheckedUpdateManyWithoutUserNestedInput
    emailVerifications?: EmailVerificationUncheckedUpdateManyWithoutUserNestedInput
  }
  export type UserUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    totpEnabled?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type ProjectUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedProjectsNestedInput
    tasks?: TaskUpdateManyWithoutProjectNestedInput
    comments?: CommentUpdateManyWithoutProjectNestedInput
    members?: ProjectMemberUpdateManyWithoutProjectNestedInput
  }
  export type ProjectUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutProjectNestedInput
    comments?: CommentUncheckedUpdateManyWithoutProjectNestedInput
    members?: ProjectMemberUncheckedUpdateManyWithoutProjectNestedInput
  }
  export type ProjectUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type TaskUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutTasksNestedInput
    assignee?: UserUpdateOneWithoutAssignedTasksNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedTasksNestedInput
  }
  export type TaskUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type TaskUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type InviteUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    token?: StringFieldUpdateOperationsInput | string
    status?: EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type InviteUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    token?: StringFieldUpdateOperationsInput | string
    status?: EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type InviteUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    token?: StringFieldUpdateOperationsInput | string
    status?: EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type CommentUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
    parent?: CommentUpdateOneWithoutRepliesNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
  }
  export type CommentUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    text?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
  }
  export type CommentUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    text?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type NotificationUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }
  export type NotificationUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type NotificationUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type AuditLogUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityType?: EnumAuditEntityTypeFieldUpdateOperationsInput | $Enums.AuditEntityType
    entityId?: StringFieldUpdateOperationsInput | string
    action?: EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction
    changes?: JsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAuditLogsNestedInput
  }
  export type AuditLogUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    entityType?: EnumAuditEntityTypeFieldUpdateOperationsInput | $Enums.AuditEntityType
    entityId?: StringFieldUpdateOperationsInput | string
    action?: EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction
    changes?: JsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type AuditLogUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    entityType?: EnumAuditEntityTypeFieldUpdateOperationsInput | $Enums.AuditEntityType
    entityId?: StringFieldUpdateOperationsInput | string
    action?: EnumAuditActionFieldUpdateOperationsInput | $Enums.AuditAction
    changes?: JsonNullValueInput | InputJsonValue
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type ProjectMemberUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProjectMembershipsNestedInput
    project?: ProjectUpdateOneRequiredWithoutMembersNestedInput
  }
  export type ProjectMemberUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type ProjectMemberUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type TaskCreateManyProjectInput = {
    id?: string
    tenantId: string
    title: string
    description?: string | null
    status?: $Enums.TaskStatus
    priority?: $Enums.TaskPriority
    assigneeId?: string | null
    dueDate?: Date | string | null
    createdBy: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }
  export type CommentCreateManyProjectInput = {
    id?: string
    tenantId: string
    userId: string
    parentId?: string | null
    text: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }
  export type ProjectMemberCreateManyProjectInput = {
    id?: string
    tenantId: string
    userId: string
    role?: $Enums.Role
    createdAt?: Date | string
  }
  export type TaskUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutTasksNestedInput
    assignee?: UserUpdateOneWithoutAssignedTasksNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedTasksNestedInput
  }
  export type TaskUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type TaskUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    assigneeId?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type CommentUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
    parent?: CommentUpdateOneWithoutRepliesNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
  }
  export type CommentUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    text?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
  }
  export type CommentUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    text?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type ProjectMemberUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutProjectMembersNestedInput
    user?: UserUpdateOneRequiredWithoutProjectMembershipsNestedInput
  }
  export type ProjectMemberUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type ProjectMemberUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type CommentCreateManyParentInput = {
    id?: string
    tenantId: string
    projectId: string
    userId: string
    text: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }
  export type CommentUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutCommentsNestedInput
    project?: ProjectUpdateOneRequiredWithoutCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
  }
  export type CommentUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
  }
  export type CommentUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }
  export type BatchPayload = {
    count: number
  }
  export const dmmf: runtime.BaseDMMF
}