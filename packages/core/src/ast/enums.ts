

/* ****************************************************************************************************************** */
// region: Flags
/* ****************************************************************************************************************** */

/**
 * The following represent broad categorized for language-agnostic types. More specific types are implemented in
 * NodeKinds
 */
export enum TypeFlags {
  None = 0,

  /* Classification */
  Unit = 1 << 1,
  Primitive = 1 << 2,
  Composite = 1 << 3,

  /* Additional Detail */
  Named = 1 << 4,                     // Node has name property
  Specific = 1 << 5,                  // Has Language-specific node kind information in origin

  /* Type Grouping */
  Literal = 1 << 6,
  Numeric = 1 << 7,
  Module = 1 << 8,
  Iterable = 1 << 9,
  Function = 1 << 10,
  Tuple = 1 << 11,
  Object = 1 << 12,
  Pointer = 1 << 13,
  ObjectMember = 1 << 29,      // Note: Keep last item value: 29 as a marker (29 is the maximum value v8 allows)
}

export enum ModifierFlags {
  None = 0,

  ReadOnly = 1 << 1,
  WriteOnly = 1 << 2,
  Public = 1 << 3,
  Private = 1 << 4,
  Protected = 1 << 5,
  Internal = 1 << 6,
  Unpublished = 1 << 29,        // Indicates unpublished in the public API scope - Example, TypeScript parser may have
                                // an option to add this modifier for items tagged with the JSDoc @internal tag
                                // (see: https://martinfowler.com/bliki/PublishedInterface.html)
}

export enum NodeFlags {
  None = 0,

  Named = 1 << 0,
  Nested = 1 << 29
}

export enum DefinitionFlags {
  None = 0,

  MultipleDeclarations = 1 << 0,
  Parameterized = 1 << 29       // Instance of a generic with supplied type-arguments
}

export enum LinkedListFlags {
  Single = 1 << 0,
  Double = 1 << 1,
  Multiple = 1 << 2,
  Circular = 1 << 3,
  HasSentinel = 1 << 4,
  HashLinking = 1 << 29
}

// endregion


/* ****************************************************************************************************************** */
// region: Kinds
/* ****************************************************************************************************************** */

export enum NodeKind {
  /* Internal */
  UnresolvedPointer,
  Pointer,

  /* Non-Numeric Primitives */
  String,
  Character,
  Byte,
  RegExp,
  Symbol,
  Boolean,

  /* Number-Like Primitives */
  Integer,
  FloatingPointNumber,
  FixedPointNumber,
  ComplexNumber,
  NotANumber,
  Infinity,

  /* Non-Numeric Literals */
  StringLiteral,
  TrueLiteral,
  FalseLiteral,
  RegExpLiteral,
  SymbolLiteral,

  /* Numeric Literals */
  IntegerLiteral,
  FloatingPointLiteral,
  FixedPointLiteral,
  ImaginaryNumberLiteral,

  /* Function-Related */
  Function,
  LambdaFunction,
  Signature,
  Parameter,

  /* Iterable */
  GenericIterable,
  Array,
  Set,
  MultiSet,
  Map,
  List,
  LinkedList,

  /* Un-categorized */
  Enum,
  TypeParameter,
  TypeArgument,
  Tuple,
  Union,
  Intersection,
  Anything,
  Nothing,
  Empty,

  /* Namespace */
  Namespace,
  SourceFile,

  /* Object-Like */
  Object,
  Class,
  Interface,

  /* Object-Member */
  Property,
  Method,

  /* Definition */
  Definition
}

export enum OrderKind {
  Insertion,
  Index,
  Link,
  Calculated
}

export enum SignatureKind {
  Call,
  Construct
}

// endregion
