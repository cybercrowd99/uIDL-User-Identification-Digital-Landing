/**
 * uIDL — Action Adjudication Envelope
 *
 * ActionAdjudicationEnvelope is the structural boundary where
 * a governed subsystem receives a neutral ActionRequestEnvelope
 * and determines—without authority creation, identity inference,
 * or execution—whether the request may proceed.
 *
 * It does not:
 * - execute behavior
 * - grant permissions
 * - authenticate identity
 * - infer meaning
 * - infer motivation
 * - modify sovereignty
 * - create authority
 *
 * ActionAdjudicationEnvelope only:
 * - receives a neutral action request
 * - evaluates structural admissibility
 * - preserves uIDL grammar
 * - maintains non-interference doctrine
 * - separates adjudication from execution
 */

import { ActionRequestEnvelope } from "./action-request-envelope";

export interface ActionAdjudicationEnvelope {
  /**
   * Governing uIDL doctrine.
   */
  doctrine: "CyberCity_uIDL_ActionAdjudicationEnvelope";

  /**
   * Structural artifact discriminator.
   */
  status: "UIDL_ACTION_ADJUDICATION_ENVELOPE";

  /**
   * Neutral action request.
   *
   * Never interpreted.
   * Never enriched.
   * Never transformed.
   */
  request: ActionRequestEnvelope;

  /**
   * Opaque adjudication reference.
   *
   * Structural only.
   * No semantic meaning.
   */
  adjudicationId: string;

  /**
   * Passive adjudication lifecycle state.
   *
   * Not execution.
   * Not authority.
   * Not permissions.
   */
  adjudicationState: "RECEIVED" | "REVIEWED" | "REJECTED";
}

/**
 * Build an ActionAdjudicationEnvelope artifact.
 *
 * Creates a safe structural boundary between:
 *
 * ActionRequestEnvelope:
 *   explicit human request
 *
 * ActionAdjudicationEnvelope:
 *   governed subsystem evaluation
 *
 * It does not:
 * - execute action
 * - infer meaning
 * - grant permissions
 * - resolve identity
 */
export function buildActionAdjudicationEnvelope(
  request: ActionRequestEnvelope,
  adjudicationId: string
): ActionAdjudicationEnvelope {
  const artifact: ActionAdjudicationEnvelope = {
    doctrine: "CyberCity_uIDL_ActionAdjudicationEnvelope",

    status: "UIDL_ACTION_ADJUDICATION_ENVELOPE",

    request,

    adjudicationId,

    adjudicationState: "RECEIVED",
  };

  return Object.freeze(artifact);
}
