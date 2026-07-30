/**
 * uIDL — Execution Envelope
 *
 * ExecutionEnvelope is the structural receipt boundary for the
 * execution subsystem. It is the final sovereignty membrane
 * before any action engine may operate.
 *
 * It represents a verified, neutral execution path without
 * granting authority, creating permissions, or performing
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
 * ExecutionEnvelope only:
 * - receives a verified execution request
 * - preserves uIDL grammar
 * - maintains non-interference doctrine
 * - separates execution receipt from execution itself
 */

import { ExecutionVerificationEnvelope } from "./execution-verification-envelope";

export interface ExecutionEnvelope {
  /**
   * Governing uIDL doctrine.
   */
  doctrine: "CyberCity_uIDL_ExecutionEnvelope";

  /**
   * Structural artifact discriminator.
   */
  status: "UIDL_EXECUTION_ENVELOPE";

  /**
   * Verified execution request.
   *
   * Never interpreted.
   * Never enriched.
   * Never transformed.
   */
  verification: ExecutionVerificationEnvelope;

  /**
   * Opaque execution envelope reference.
   *
   * Structural only.
   * No semantic meaning.
   * Not a permission token.
   */
  executionId: string;

  /**
   * Passive execution lifecycle state.
   *
   * Not execution.
   * Not authority.
   * Not permissions.
   */
  executionState: "RECEIVED" | "STAGED";
}

/**
 * Build an ExecutionEnvelope artifact.
 *
 * Creates the final sovereignty boundary between:
 *
 * ExecutionVerificationEnvelope:
 *   proof of admissibility
 *
 * ExecutionEnvelope:
 *   neutral receipt by execution subsystem
 *
 * It does not:
 * - execute action
 * - grant permissions
 * - infer meaning
 * - resolve identity
 */
export function buildExecutionEnvelope(
  verification: ExecutionVerificationEnvelope,
  executionId: string
): ExecutionEnvelope {
  const artifact: ExecutionEnvelope = {
    doctrine: "CyberCity_uIDL_ExecutionEnvelope",

    status: "UIDL_EXECUTION_ENVELOPE",

    verification,

    executionId,

    executionState: "RECEIVED",
  };

  return Object.freeze(artifact);
}
