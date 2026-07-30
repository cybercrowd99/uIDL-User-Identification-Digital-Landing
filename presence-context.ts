/**
 * uIDL — Presence Context
 *
 * PresenceContext is the structural context wrapper for uIDL
 * identity presence artifacts.
 *
 * It provides contextual placement without interpreting identity,
 * inferring intent, creating authority, or modifying sovereignty.
 *
 * It does not:
 * - identify a person
 * - store identity instances
 * - contain metadata
 * - represent personality
 * - represent preferences
 * - represent history
 * - predict behavior
 * - grant authority
 * - activate interaction
 *
 * PresenceContext only:
 * - describes where presence is structurally located
 * - preserves uIDL grammar
 * - maintains non-interference doctrine
 * - separates presence from meaning
 */

import { NeutralEnvelope } from "./neutral-envelope";

/**
 * Structural context wrapper for uIDL presence.
 *
 * This is context, not identity interpretation.
 */
export interface PresenceContext {
  /**
   * Governing uIDL doctrine.
   */
  doctrine: "CyberCity_uIDL_PresenceContext";

  /**
   * Structural artifact discriminator.
   */
  status: "UIDL_PRESENCE_CONTEXT";

  /**
   * Neutral envelope carrying identity presence.
   *
   * Never interpreted.
   * Never enriched.
   * Never transformed.
   */
  envelope: NeutralEnvelope;

  /**
   * Opaque contextual reference.
   *
   * Structural only.
   * No semantic meaning.
   */
  contextId: string;

  /**
   * Passive context lifecycle state.
   *
   * Not authority.
   * Not activation.
   * Not intent.
   */
  contextState: "PLACED" | "OBSERVED";
}

/**
 * Build a PresenceContext artifact.
 *
 * Creates a structural context wrapper around a neutral envelope.
 *
 * It does not:
 * - authenticate identity
 * - infer meaning
 * - grant permissions
 * - activate interaction
 *
 * It only preserves safe structural placement
 * of uIDL presence.
 */
export function buildPresenceContext(
  envelope: NeutralEnvelope,
  contextId: string
): PresenceContext {
  const artifact: PresenceContext = {
    doctrine: "CyberCity_uIDL_PresenceContext",

    status: "UIDL_PRESENCE_CONTEXT",

    envelope,

    contextId,

    contextState: "PLACED",
  };

  return Object.freeze(artifact);
}
