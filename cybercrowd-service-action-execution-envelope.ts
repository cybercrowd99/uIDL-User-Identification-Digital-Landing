/**
 * CyberCrowd — CyberService Action Execution Envelope
 *
 * CyberServiceActionExecutionEnvelope is the final pre-execution
 * artifact consumed by the CyberService Engine. It represents a
 * fully staged, capability-driven action ready for engine intake.
 *
 * It does not:
 * - contain identity
 * - contain intent
 * - contain permissions
 * - contain authority
 * - contain semantic meaning
 *
 * It does not perform execution.
 *
 * CyberServiceActionExecutionEnvelope only:
 * - binds the staged action to the execution engine
 * - preserves sovereignty boundaries
 * - ensures execution remains capability-driven, not identity-driven
 */

import { CyberServiceActionEnvelope } from "./cybercrowd-service-action-envelope";

/**
 * Structural definition of an engine-ready CyberService action.
 */
export interface CyberServiceActionExecutionEnvelope {
  /**
   * Governing CyberCrowd doctrine.
   */
  doctrine: "CyberCrowd_CyberServiceActionExecutionEnvelope";

  /**
   * Structural artifact discriminator.
   */
  status: "CYBERCROWD_SERVICE_ACTION_EXECUTION_ENVELOPE";

  /**
   * Staged CyberService action envelope.
   *
   * Never interpreted.
   * Never enriched.
   * Never transformed.
   */
  action: CyberServiceActionEnvelope;

  /**
   * Execution engine identifier.
   *
   * Selects capability machinery.
   * Does not select human treatment.
   *
   * Structural only.
   * No semantic meaning.
   */
  engineId: string;

  /**
   * Passive engine intake lifecycle state.
   *
   * readinessState = engine intake preparation
   *
   * readinessState ≠ permission to execute
   */
  readinessState: "READY" | "NOT_READY";
}

/**
 * Build a CyberServiceActionExecutionEnvelope artifact.
 *
 * Creates the engine intake wrapper:
 *
 * CyberServiceActionEnvelope:
 *   staged, capability-bound action
 *
 * CyberServiceActionExecutionEnvelope:
 *   structural definition of an action ready for engine intake
 *
 * It does not:
 * - execute action
 * - grant permissions
 * - infer meaning
 * - resolve identity
 */
export function buildCyberServiceActionExecutionEnvelope(
  action: CyberServiceActionEnvelope,
  engineId: string
): CyberServiceActionExecutionEnvelope {
  const artifact: CyberServiceActionExecutionEnvelope = {
    doctrine: "CyberCrowd_CyberServiceActionExecutionEnvelope",

    status: "CYBERCROWD_SERVICE_ACTION_EXECUTION_ENVELOPE",

    action,

    engineId,

    readinessState: "READY",
  };

  return Object.freeze(artifact);
}
