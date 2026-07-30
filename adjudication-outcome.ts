/**
 * uIDL — Adjudication Outcome
 *
 * AdjudicationOutcome is the structural verdict produced by a
 * governed subsystem after evaluating an ActionAdjudicationEnvelope.
 *
 * It represents whether a requested path is structurally acceptable
 * without granting authority, creating permissions, or performing
 * execution.
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
 * AdjudicationOutcome only:
 * - expresses a neutral verdict
 * - preserves uIDL grammar
 * - maintains non-interference doctrine
 * - separates adjudication from execution
 */

import { ActionAdjudicationEnvelope } from "./action-adjudication-envelope";

export interface AdjudicationOutcome {
  /**
   * Governing uIDL doctrine.
   */
  doctrine: "CyberCity_uIDL_AdjudicationOutcome";

  /**
   * Structural artifact discriminator.
   */
  status: "UIDL_ADJUDICATION_OUTCOME";

  /**
   * The adjudication envelope being evaluated.
   *
   * Never interpreted.
   * Never enriched.
   * Never transformed.
   */
  adjudication: ActionAdjudicationEnvelope;

  /**
   * Neutral verdict.
   *
   * Structural only.
   * No semantic meaning.
   * Not a permission token.
   */
  verdict: "ALLOWED" | "DECLINED" | "DEFERRED";

  /**
   * Passive outcome lifecycle state.
   *
   * Not execution.
   * Not authority.
   * Not permissions.
   */
  outcomeState: "ISSUED";
}

/**
 * Build an AdjudicationOutcome artifact.
 *
 * Creates a neutral verdict after adjudication.
 *
 * It does not:
 * - execute action
 * - grant permissions
 * - infer meaning
 * - resolve identity
 */
export function buildAdjudicationOutcome(
  adjudication: ActionAdjudicationEnvelope,
  verdict: "ALLOWED" | "DECLINED" | "DEFERRED"
): AdjudicationOutcome {
  const artifact: AdjudicationOutcome = {
    doctrine: "CyberCity_uIDL_AdjudicationOutcome",

    status: "UIDL_ADJUDICATION_OUTCOME",

    adjudication,

    verdict,

    outcomeState: "ISSUED",
  };

  return Object.freeze(artifact);
}
