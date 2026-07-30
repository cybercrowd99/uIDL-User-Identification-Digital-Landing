/**
 * uIDL — Qualifier Generator
 *
 * UIDLQualifier is the opaque structural reference generator
 * for uIDL identity presence artifacts.
 *
 * It creates a non-semantic qualifier used to distinguish
 * presence artifacts without representing the human.
 *
 * It does not:
 * - identify a person
 * - store personal information
 * - contain metadata
 * - encode meaning
 * - represent personality
 * - represent preferences
 * - represent history
 * - predict behavior
 * - create authority
 * - create ownership
 *
 * UIDLQualifier only:
 * - creates opaque structural references
 * - preserves identity neutrality
 * - supports safe artifact separation
 * - maintains non-interference doctrine
 */

export interface UIDLQualifier {
  /**
   * Governing uIDL doctrine.
   */
  doctrine: "CyberCity_uIDL_Qualifier";

  /**
   * Structural artifact discriminator.
   */
  status: "UIDL_QUALIFIER";

  /**
   * Opaque qualifier value.
   *
   * No semantic meaning.
   * No encoded identity.
   */
  value: string;

  /**
   * Qualifier lifecycle state.
   */
  qualifierState: "ACTIVE";
}

/**
 * Generate an opaque uIDL qualifier.
 *
 * Format example:
 *
 * uIDL=C11f2d19270443728b757b602a71c7e4
 *
 * The generated value is structural only.
 *
 * It does not:
 * - identify a person
 * - authenticate identity
 * - create trust
 * - create permissions
 */
export function buildUIDLQualifier(): UIDLQualifier {
  const randomValue = crypto.randomUUID()
    .replace(/-/g, "");

  const artifact: UIDLQualifier = {
    doctrine: "CyberCity_uIDL_Qualifier",

    status: "UIDL_QUALIFIER",

    value: `C${randomValue}`,

    qualifierState: "ACTIVE",
  };

  return Object.freeze(artifact);
}
