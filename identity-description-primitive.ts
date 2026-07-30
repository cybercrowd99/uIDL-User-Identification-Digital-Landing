/**
 * uIDL — Identity Description Primitive
 *
 * IdentityDescriptionPrimitive is the smallest structural
 * identity definition artifact within uIDL.
 *
 * It represents identity presence without interpreting identity.
 *
 * It does not:
 * - store identity instances
 * - contain metadata
 * - define meaning
 * - create authority
 * - express behavior
 * - preserve history
 * - create continuity
 * - identify personal attributes
 *
 * IdentityDescriptionPrimitive only:
 * - defines a neutral identity presence structure
 * - preserves uIDL grammar rules
 * - maintains non-interference doctrine
 * - provides a reusable identity description atom
 */

/**
 * Structural identity description primitive.
 *
 * This is a definition artifact, not an identity record.
 *
 * The id field is opaque.
 * It carries no semantic meaning.
 */
export interface IdentityDescriptionPrimitive {
  /**
   * Governing uIDL doctrine.
   */
  doctrine: "CyberCity_IdentityDescriptionPrimitive";

  /**
   * Structural artifact discriminator.
   */
  status: "IDENTITY_DESCRIPTION_PRIMITIVE";

  /**
   * Opaque structural reference.
   *
   * Never interpreted.
   * Never enriched.
   * Never resolved into identity data.
   */
  id: string;

  /**
   * Primitive category.
   *
   * Presence only.
   */
  type: "PRESENCE";

  /**
   * Passive lifecycle state.
   */
  state: "AVAILABLE" | "PRESENT";
}

/**
 * Build an IdentityDescriptionPrimitive artifact.
 *
 * This creates the smallest uIDL identity description unit.
 *
 * It does not:
 * - identify a person
 * - store identity
 * - create authority
 * - activate behavior
 * - modify external systems
 *
 * It only creates a frozen structural definition artifact.
 */
export function buildIdentityDescriptionPrimitive(
  id: string,
  state: "AVAILABLE" | "PRESENT" = "AVAILABLE"
): IdentityDescriptionPrimitive {
  const artifact: IdentityDescriptionPrimitive = {
    doctrine: "CyberCity_IdentityDescriptionPrimitive",
    status: "IDENTITY_DESCRIPTION_PRIMITIVE",

    id,

    type: "PRESENCE",

    state,
  };

  return Object.freeze(artifact);
}
