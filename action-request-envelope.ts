/**
 * uIDL — Action Request Envelope
 *
 * ActionRequestEnvelope is the structural boundary between
 * human intent and system action.
 *
 * It represents an explicit request for an action without
 * granting authority, creating permissions, or performing
 * execution.
 *
 * It does not:
 * - identify a person
 * - store identity instances
 * - infer meaning
 * - infer motivation
 * - grant permissions
 * - execute behavior
 * - authenticate identity
 * - modify sovereignty
 *
 * ActionRequestEnvelope only:
 * - carries explicit human intent into a request form
 * - preserves uIDL grammar
 * - maintains non-interference doctrine
 * - separates request from authority and execution
 */

import { IntentEnvelope } from "./intent-envelope";

export interface ActionRequestEnvelope {
  doctrine: "CyberCity_uIDL_ActionRequestEnvelope";

  status: "UIDL_ACTION_REQUEST_ENVELOPE";

  intent: IntentEnvelope;

  requestId: string;

  requestState: "REQUESTED" | "CANCELLED";
}

export function buildActionRequestEnvelope(
  intent: IntentEnvelope,
  requestId: string
): ActionRequestEnvelope {
  const artifact: ActionRequestEnvelope = {
    doctrine: "CyberCity_uIDL_ActionRequestEnvelope",

    status: "UIDL_ACTION_REQUEST_ENVELOPE",

    intent,

    requestId,

    requestState: "REQUESTED",
  };

  return Object.freeze(artifact);
}
