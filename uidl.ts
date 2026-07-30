/**
 * uIDL — User Identification Digital Landing
 *
 * uIDL is the neutral identity landing artifact.
 *
 * It represents human presence without becoming
 * a container for human meaning.
 *
 * It does not:
 * - store personality
 * - store preferences
 * - store history
 * - represent worth
 * - predict behavior
 * - create authority
 * - create ownership
 *
 * uIDL only:
 * - represents presence
 * - represents availability
 * - carries structural identity reference
 * - preserves safe identity grammar
 */

export interface uIDL {
  /**
   * Governing uIDL doctrine.
   */
  doctrine: "CyberCity_uIDL";

  /**
   * Structural artifact discriminator.
   */
  status: "UIDL_PRIMITIVE";

  /**
   * Opaque structural reference.
   *
   * No semantic meaning.
   * No human description.
   */
  id: string;

  /**
   * Presence classification.
   */
  type: "PRESENCE";

  /**
   * Neutral lifecycle state.
   */
  state:
    | "AVAILABLE"
    | "PRESENT"
    | "WITHDRAWN";
}

/**
 * Build a neutral uIDL artifact.
 *
 * This creates a presence representation only.
 *
 * It does not:
 * - identify a person
 * - create a profile
 * - infer intent
 * - assign permissions
 */
export function buildUIDL(
  id: string
): uIDL {
  const artifact: uIDL = {
    doctrine: "CyberCity_uIDL",

    status: "UIDL_PRIMITIVE",

    id,

    type: "PRESENCE",

    state: "AVAILABLE",
  };

  return Object.freeze(artifact);
}
