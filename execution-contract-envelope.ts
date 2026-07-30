/**
 * CyberCrowd — Execution Contract Envelope
 *
 * ExecutionContractEnvelope is the first artifact outside uIDL.
 * It defines what the execution subsystem is allowed to consume
 * and how it proves it is executing only the verified handoff.
 *
 * It does not:
 * - contain identity
 * - contain intent
 * - contain permissions
 * - contain authority
 * - contain semantic meaning
 * - perform execution
 *
 * ExecutionContractEnvelope only:
 * - binds a verified execution envelope to a CyberService contract
 * - declares the capability interface to be invoked
 * - preserves sovereignty boundaries
 * - ensures execution is capability-driven, not identity-driven
 */

import { ExecutionEnvelope } from "../uidl/execution-envelope";

export interface ExecutionContractEnvelope {
  /**
   * Governing CyberCrowd doctrine.
   */
  doctrine: "CyberCrowd_ExecutionContractEnvelope";

  /**
   * Structural artifact discriminator.
   */
  status: "CYBERCROWD_EXECUTION_CONTRACT_ENVELOPE";

  /**
   * Verified execution envelope.
   *
   * Never interpreted.
   * Never enriched.
   * Never transformed.
   */
  execution: ExecutionEnvelope;

  /**
   * Capability contract identifier.
   *
   * Defines which CyberService or tool interface
   * is allowed to receive this execution.
   *
   * Structural only.
   * No semantic meaning.
   */
  contractId: string;

  /**
   * Capability interface reference.
   *
   * This is the tool or service interface
   * the execution engine may call.
   *
   * It is not yet invoked.
   */
  capabilityInterface: string;

  /**
   * Passive contract lifecycle state.
   *
   * Not execution.
   * Not authority.
   * Not permissions.
   */
  contractState: "BOUND" | "UNBOUND";
}

/**
 * Build an ExecutionContractEnvelope artifact.
 *
 * Creates the first CyberCrowd execution boundary:
 *
 * ExecutionEnvelope:
 *   verified execution receipt
 *
 * ExecutionContractEnvelope:
 *   binding to a CyberService capability contract
 *
 * It does not:
 * - execute action
 * - grant permissions
 * - infer meaning
 * - resolve identity
 */
export function buildExecutionContractEnvelope(
  execution: ExecutionEnvelope,
  contractId: string,
  capabilityInterface: string
): ExecutionContractEnvelope {
  const artifact: ExecutionContractEnvelope = {
    doctrine: "CyberCrowd_ExecutionContractEnvelope",

    status: "CYBERCROWD_EXECUTION_CONTRACT_ENVELOPE",

    execution,

    contractId,

    capabilityInterface,

    contractState: "BOUND",
  };

  return Object.freeze(artifact);
}
