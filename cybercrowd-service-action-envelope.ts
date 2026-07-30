/**
 * CyberCrowd — CyberService Action Envelope
 *
 * CyberServiceActionEnvelope is the structural definition of the
 * action a CyberService is prepared to perform. It is the final
 * pre-execution artifact inside CyberCrowd-Core.
 *
 * It does not:
 * - contain identity
 * - contain intent
 * - contain permissions
 * - contain authority
 * - contain semantic meaning
 * - perform execution
 *
 * CyberServiceActionEnvelope only:
 * - defines the action to be staged
 * - binds the operation and payload to the capability contract
 * - preserves sovereignty boundaries
 * - ensures execution remains capability-driven, not identity-driven
 */

import { CyberServiceExecutionEnvelope } from "./cybercrowd-service-execution-envelope";

/**
 * Structural definition of a staged CyberService action.
 */
export interface CyberServiceActionEnvelope {
  /**
   * Governing CyberCrowd doctrine.
   */
  doctrine: "CyberCrowd_CyberServiceActionEnvelope";

  /**
   * Structural artifact discriminator.
   */
  status: "CYBERCROWD_SERVICE_ACTION_ENVELOPE";

  /**
   * Prepared CyberService execution envelope.
   *
   * Never interpreted.
   * Never enriched.
   * Never transformed.
   */
  execution: CyberServiceExecutionEnvelope;

  /**
   * Action identifier.
   *
   * Defines the specific action the CyberService will stage.
   *
   * Structural only.
   * No semantic meaning.
   */
  actionId: string;

  /**
   * Opaque action payload reference.
   *
   * Neutral payload for the action.
   * Contains no identity.
   * Contains no intent.
   * Contains no permissions.
   */
  actionPayloadRef: string;

  /**
   * Passive action lifecycle state.
   *
   * Not execution.
   * Not authority.
   * Not permissions.
   */
  actionState: "STAGED" | "UNSTAGED";
}

/**
 * Build a CyberServiceActionEnvelope artifact.
 *
 * Creates the CyberCrowd action definition wrapper.
 *
 * CyberServiceExecutionEnvelope:
 *   capability-bound, operation-prepared execution
 *
 * CyberServiceActionEnvelope:
 *   structural definition of the action to be staged
 *
 * It does not:
 * - execute action
 * - grant permissions
 * - infer meaning
 * - resolve identity
 */
export function buildCyberServiceActionEnvelope(
  execution: CyberServiceExecutionEnvelope,
  actionId: string,
  actionPayloadRef: string
): CyberServiceActionEnvelope {
  const artifact: CyberServiceActionEnvelope = {
    doctrine: "CyberCrowd_CyberServiceActionEnvelope",

    status: "CYBERCROWD_SERVICE_ACTION_ENVELOPE",

    execution,

    actionId,

    actionPayloadRef,

    actionState: "STAGED",
  };

  return Object.freeze(artifact);
}
