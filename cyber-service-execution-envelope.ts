/**
 * CyberCrowd — CyberService Execution Envelope
 *
 * CyberServiceExecutionEnvelope is the structural wrapper the
 * CyberCrowd execution engine receives after a capability
 * contract has been bound. It is the first artifact that
 * belongs entirely to CyberCrowd's sovereign execution world.
 *
 * It does not:
 * - contain identity
 * - contain intent
 * - contain permissions
 * - contain authority
 * - contain semantic meaning
 * - perform execution
 *
 * CyberServiceExecutionEnvelope only:
 * - binds a capability contract to an execution-ready payload
 * - declares the CyberService operation to be invoked
 * - preserves sovereignty boundaries
 * - ensures execution remains capability-driven, not identity-driven
 */

import { ExecutionContractEnvelope } from "./execution-contract-envelope";

export interface CyberServiceExecutionEnvelope {
  /**
   * Governing CyberCrowd doctrine.
   */
  doctrine: "CyberCrowd_CyberServiceExecutionEnvelope";

  /**
   * Structural artifact discriminator.
   */
  status: "CYBERCROWD_SERVICE_EXECUTION_ENVELOPE";

  /**
   * Bound execution contract.
   *
   * Never interpreted.
   * Never enriched.
   * Never transformed.
   */
  contract: ExecutionContractEnvelope;

  /**
   * CyberService operation identifier.
   *
   * Defines which operation of the capability interface
   * is being prepared for execution.
   *
   * Structural only.
   * No semantic meaning.
   */
  operationId: string;

  /**
   * Opaque execution payload reference.
   *
   * This is the neutral payload the CyberService will consume.
   * It contains no identity, no intent, no permissions.
   */
  payloadRef: string;

  /**
   * Passive execution lifecycle state.
   *
   * Not execution.
   * Not authority.
   * Not permissions.
   */
  serviceState: "PREPARED" | "UNPREPARED";
}

/**
 * Build a CyberServiceExecutionEnvelope artifact.
 *
 * Creates the CyberCrowd execution wrapper:
 *
 * ExecutionContractEnvelope:
 *   capability-bound, verified execution request
 *
 * CyberServiceExecutionEnvelope:
 *   structural preparation for CyberService invocation
 *
 * It does not:
 * - execute action
 * - grant permissions
 * - infer meaning
 * - resolve identity
 */
export function buildCyberServiceExecutionEnvelope(
  contract: ExecutionContractEnvelope,
  operationId: string,
  payloadRef: string
): CyberServiceExecutionEnvelope {
  const artifact: CyberServiceExecutionEnvelope = {
    doctrine: "CyberCrowd_CyberServiceExecutionEnvelope",

    status: "CYBERCROWD_SERVICE_EXECUTION_ENVELOPE",

    contract,

    operationId,

    payloadRef,

    serviceState: "PREPARED",
  };

  return Object.freeze(artifact);
}
