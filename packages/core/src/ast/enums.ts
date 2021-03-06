
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
  Composite = 1 << 3,         // see: https://en.wikipedia.org/wiki/Data_type#Composite_types
  Abstract = 1 << 4,

  /* Type Grouping */
  Literal = 1 << 5,
  Numeric = 1 << 6,
  Module = 1 << 7,
  Iterable = 1 << 8,
  Function = 1 << 9,
  Tuple = 1 << 10,
  Object = 1 << 11,
  Reference = 1 << 12,
  Enum = 1 << 13,
  ObjectMember = 1 << 29,     // Note: Keep last item value: 29 as a marker (29 is the maximum value v8 allows)
}

export enum ModifierFlags {
  None = 0,

  ReadOnly = 1 << 1,
  WriteOnly = 1 << 2,
  Public = 1 << 3,
  Private = 1 << 4,
  Protected = 1 << 5,
  Internal = 1 << 6,
  Unpublished = 1 << 29,      // Indicates unpublished in the public API scope - Example, TypeScript parser may have
                              // an option to add this modifier for items tagged with the JSDoc @internal tag
                              // (see: https://martinfowler.com/bliki/PublishedInterface.html)
}

export enum NodeFlags {
  None = 0,

  Named = 1 << 0,             // Node has name property
  Specific = 1 << 1,          // Has Language-specific node kind information in origin
  CanReference = 1 << 2,
  Definition = 1 << 3,
  Nested = 1 << 29,
}

export enum DefinitionFlags {
  None = 0,

  /* Declaration Types */
  Function = 1 << 0,
  Variable = 1 << 1,
  Class = 1 << 2,
  Interface = 1 << 3,

  /* Modifiers */
  HasMultipleDeclarations = 1 << 0,
  Parameterized = 1 << 29       // Instance of a generic with supplied type-arguments (combined with Class or Interface)
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
  /* ReferenceNode */
  Reference,

  /* Non-Numeric Primitives */
  String,
  Character,
  Byte,
  RegExp,
  Symbol,
  Boolean,

  /* Number-Like Primitives */
  Integer,
  DecimalNumber,
  ComplexNumber,
  NotANumber,
  Infinity,

  /* Non-Numeric Literals */
  StringLiteral,
  TrueLiteral,
  FalseLiteral,
  RegExpLiteral,
  SymbolLiteral,
  DateTimeLiteral,

  /* Numeric Literals */
  IntegerLiteral,
  DecimalLiteral,
  ImaginaryNumberLiteral,

  /* Abstract Data Types */
  Date,
  DateTime,

  /* Function-Related */
  Function,
  AnonymousFunction,
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

  /* Enum-Related */
  Enum,
  EnumMember,

  /* TypeParameter-Related */
  TypeParameter,
  TypeArgument,

  /* Tuple */
  Tuple,

  /* Set Operations */
  Union,
  Intersection,

  /* Special Types */
  Anything,
  Nothing,
  Null,

  /* Module */
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

export enum DecimalKind {
  Float,
  Fixed,
  Either
}

// endregion
