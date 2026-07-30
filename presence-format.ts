/**
 * uIDL — Presence Format
 *
 * PresenceFormat defines the neutral lifecycle language
 * for uIDL identity presence.
 *
 * It describes how a uIDL artifact is structurally present
 * without interpreting identity, intent, behavior, or meaning.
 *
 * It does not:
 * - identify a person
 * - store identity instances
 * - contain metadata
 * - create authority
 * - activate behavior
 * - infer intent
 * - create history
 * - modify sovereignty
 *
 * PresenceFormat only:
 * - defines passive presence states
 * - preserves uIDL grammar
 * - maintains non-interference doctrine
 * - provides a shared structural vocabulary
 */

/**
 * Allowed uIDL presence states.
 *
 * These states describe presence only.
 *
 * They do not represent:
 * - permissions
 * - intent
 * - trust
 * - identity value
 */
export type UIDLPresenceState =
  | "AVAILABLE"
  | "PRESENT"
  | "WITHDRAWN";

/**
 * Structural presence format artifact.
 */
export interface PresenceFormat {
  /**
   * Governing uIDL doctrine.
   */
  doctrine: "CyberCity_uIDL_PresenceFormat";

  /**
   * Structural artifact discriminator.
   */
  status: "UIDL_PRESENCE_FORMAT";

  /**
   * Presence state vocabulary.
   */
  states: readonly UIDLPresenceState[];

  /**
   * Format state.
   */
  formatState: "DEFINED";
}

/**
 * Build a PresenceFormat artifact.
 *
 * This creates the neutral presence vocabulary
 * for uIDL systems.
 *
 * It does not:
 * - trigger actions
 * - interpret identity
 * - create intent
 * - grant authority
 * - modify environments
 *
 * It only defines structural presence states.
 */
export function buildPresenceFormat(
  states: UIDLPresenceState[] = [
    "AVAILABLE",
    "PRESENT",
    "WITHDRAWN",
  ]
): PresenceFormat {
  const artifact: PresenceFormat = {
    doctrine: "CyberCity_uIDL_PresenceFormat",

    status: "UIDL_PRESENCE_FORMAT",

    states: Object.freeze([...states]),

    formatState: "DEFINED",
  };

  return Object.freeze(artifact);
}
