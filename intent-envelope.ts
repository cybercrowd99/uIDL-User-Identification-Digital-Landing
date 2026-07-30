/**
 * uIDL — Intent Envelope
 *
 * IntentEnvelope is the controlled human choice boundary
 * between presence and action.
 *
 * It represents explicit human intent without interpreting identity,
 * predicting behavior, creating authority, or activating action.
 *
 * It does not:
 * - identify a person
 * - store identity instances
 * - infer meaning
 * - infer motivation
 * - create permissions
 * - activate behavior
 * - modify sovereignty
 *
 * IntentEnvelope only:
 * - captures explicit human choice
 * - preserves uIDL grammar
 * - maintains non-interference doctrine
 * - separates intent from identity meaning
 */

import { PresenceInteractionBinding } from "./presence-interaction-binding";

export interface IntentEnvelope {
  /**
   * Governing uIDL doctrine.
   */
  doctrine: "CyberCity_uIDL_IntentEnvelope";

  /**
   * Structural artifact discriminator.
   */
  status: "UIDL_INTENT_ENVELOPE";

  /**
   * Bound presence exposed to an interaction surface.
   *
   * Never interpreted.
   * Never enriched.
   * Never transformed.
   */
  binding: PresenceInteractionBinding;

  /**
   * Opaque intent reference.
   *
   * Structural only.
   * No semantic meaning.
   */
  intentId: string;

  /**
   * Passive intent lifecycle state.
   *
   * Not activation.
   * Not authority.
   * Not prediction.
   */
  intentState: "CHOSEN" | "DECLINED";
}

/**
 * Build an IntentEnvelope artifact.
 *
 * Creates a controlled human choice boundary between:
 *
 * PresenceInteractionBinding:
 *   presence visible on a surface
 *
 * IntentEnvelope:
 *   explicit human choice
 *
 * It does not:
 * - activate action
 * - infer meaning
 * - grant permissions
 * - resolve identity
 */
export function buildIntentEnvelope(
  binding: PresenceInteractionBinding,
  intentId: string
): IntentEnvelope {
  const artifact: IntentEnvelope = {
    doctrine: "CyberCity_uIDL_IntentEnvelope",

    status: "UIDL_INTENT_ENVELOPE",

    binding,

    intentId,

    intentState: "CHOSEN",
  };

  return Object.freeze(artifact);
}
