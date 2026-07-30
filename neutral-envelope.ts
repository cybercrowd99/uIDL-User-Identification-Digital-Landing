/**
 * uIDL — Neutral Envelope
 *
 * NeutralEnvelope is the structural wrapper layer for uIDL
 * identity presence artifacts.
 *
 * It carries identity presence across boundaries without
 * interpreting, enriching, storing, or modifying identity.
 *
 * It does not:
 * - store identity instances
 * - contain metadata
 * - define meaning
 * - create authority
 * - activate behavior
 * - preserve history
 * - create ownership
 * - alter subsystem sovereignty
 *
 * NeutralEnvelope only:
 * - preserves uIDL primitive structure
 * - provides a safe transport boundary
 * - maintains non-interference doctrine
 * - separates identity presence from system context
 */

import { IdentityDescriptionPrimitive } from "./identity-description-primitive";

/**
 * Neutral structural envelope.
 *
 * This is a carrier, not an identity container.
 */
export interface NeutralEnvelope {
  /**
   * Governing uIDL doctrine.
   */
  doctrine: "CyberCity_uIDL_NeutralEnvelope";

  /**
   * Structural artifact discriminator.
   */
  status: "UIDL_NEUTRAL_ENVELOPE";

  /**
   * Preserved identity description primitive.
   *
   * Never enriched.
   * Never interpreted.
   * Never mutated.
   */
  primitive: IdentityDescriptionPrimitive;

  /**
   * Opaque envelope qualifier.
   *
   * Structural reference only.
   */
  envelopeId: string;

  /**
   * Passive envelope state.
   */
  envelopeState: "SEALED";
}

/**
 * Build a NeutralEnvelope artifact.
 *
 * This creates a frozen structural wrapper around
 * an IdentityDescriptionPrimitive.
 *
 * It does not:
 * - identify a person
 * - authenticate identity
 * - create permissions
 * - route behavior
 * - modify external systems
 *
 * It only preserves neutral identity presence.
 */
export function buildNeutralEnvelope(
  primitive: IdentityDescriptionPrimitive,
  envelopeId: string
): NeutralEnvelope {
  const artifact: NeutralEnvelope = {
    doctrine: "CyberCity_uIDL_NeutralEnvelope",

    status: "UIDL_NEUTRAL_ENVELOPE",

    primitive,

    envelopeId,

    envelopeState: "SEALED",
  };

  return Object.freeze(artifact);
}
