/**
 * uIDL — Execution Request Envelope
 *
 * ExecutionRequestEnvelope is the structural handoff boundary
 * between adjudication and the execution subsystem.
 *
 * It represents a neutral, governed request for execution
 * without granting authority, creating permissions, or
 * performing the action.
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
 * ExecutionRequestEnvelope only:
 * - carries adjudicated acceptability forward
 * - preserves uIDL grammar
 * - maintains non-interference doctrine
 * - separates execution request from execution itself
 */

import { AdjudicationOutcome } from "./adjudication-outcome";

export interface ExecutionRequestEnvelope {
  /**
   * Governing uIDL doctrine.
   */
  doctrine: "CyberCity_uIDL_ExecutionRequestEnvelope";

  /**
   * Structural artifact discriminator.
   */
  status: "UIDL_EXECUTION_REQUEST_ENVELOPE";

  /**
   * Neutral adjudication outcome.
   *
   * Never interpreted.
   * Never enriched.
   * Never transformed.
   */
  outcome: AdjudicationOutcome;

  /**
   * Opaque execution request reference.
   *
   * Structural only.
   * No semantic meaning.
   * Not a permission token.
   */
  executionRequestId: string;

  /**
   * Passive request lifecycle state.
   *
   * Not execution.
   * Not authority.
   * Not permissions.
   */
  requestState: "FORWARDED" | "WITHHELD";
}

/**
 * Build an ExecutionRequestEnvelope artifact.
 *
 * Creates a safe structural boundary between:
 *
 * AdjudicationOutcome:
 *   neutral verdict
 *
 * ExecutionRequestEnvelope:
 *   neutral handoff to execution subsystem
 *
 * It does not:
 * - execute action
 * - grant permissions
 * - infer meaning
 * - resolve identity
 */
export function buildExecutionRequestEnvelope(
  outcome: AdjudicationOutcome,
  executionRequestId: string
): ExecutionRequestEnvelope {
  const artifact: ExecutionRequestEnvelope = {
    doctrine: "CyberCity_uIDL_ExecutionRequestEnvelope",

    status: "UIDL_EXECUTION_REQUEST_ENVELOPE",

    outcome,

    executionRequestId,

    requestState: "FORWARDED",
  };

  return Object.freeze(artifact);
}
