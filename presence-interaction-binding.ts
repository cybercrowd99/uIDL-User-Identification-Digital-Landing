/**
 * uIDL — Presence Interaction Binding
 *
 * PresenceInteractionBinding establishes a passive structural
 * relationship between a PresenceContext and an interaction
 * surface without interpreting identity, inferring intent,
 * creating authority, or activating behavior.
 *
 * It does not:
 * - identify a person
 * - store identity instances
 * - infer meaning
 * - infer intent
 * - create permissions
 * - activate interaction
 * - modify sovereignty
 *
 * It only:
 * - binds contextual presence to an interaction surface
 * - preserves uIDL grammar
 * - maintains non-interference doctrine
 * - separates interaction visibility from identity meaning
 */

import { PresenceContext } from "./presence-context";

export interface PresenceInteractionBinding {
  /**
   * Governing uIDL doctrine.
   */
  doctrine: "CyberCity_uIDL_PresenceInteractionBinding";

  /**
   * Structural artifact discriminator.
   */
  status: "UIDL_PRESENCE_INTERACTION_BINDING";

  /**
   * Contextual presence artifact.
   *
   * Never interpreted.
   * Never enriched.
   * Never transformed.
   */
  context: PresenceContext;

  /**
   * Opaque interaction surface reference.
   *
   * Structural only.
   * No semantic meaning.
   */
  surfaceId: string;

  /**
   * Passive interaction lifecycle state.
   *
   * Not activation.
   * Not authority.
   * Not intent.
   */
  interactionState: "VISIBLE" | "RENDERED";
}

/**
 * Build a PresenceInteractionBinding artifact.
 *
 * Creates a passive structural relationship between:
 *
 * PresenceContext:
 *   where identity presence is placed
 *
 * Interaction Surface:
 *   where presence may be visible
 *
 * It does not:
 * - activate interaction
 * - infer meaning
 * - grant permissions
 * - resolve identity
 */
export function buildPresenceInteractionBinding(
  context: PresenceContext,
  surfaceId: string
): PresenceInteractionBinding {
  const artifact: PresenceInteractionBinding = {
    doctrine: "CyberCity_uIDL_PresenceInteractionBinding",

    status: "UIDL_PRESENCE_INTERACTION_BINDING",

    context,

    surfaceId,

    interactionState: "VISIBLE",
  };

  return Object.freeze(artifact);
}
