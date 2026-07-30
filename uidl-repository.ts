/**
 * uIDL — Repository Authority
 *
 * UIDLRepository is the Dewey-style definition authority
 * for safe identity presence grammar.
 *
 * It catalogs identity structures without storing identity.
 *
 * It does not:
 * - store identity instances
 * - store profiles
 * - contain personal metadata
 * - interpret identity
 * - create authority
 * - infer behavior
 * - preserve identity history
 *
 * UIDLRepository only:
 * - catalogs identity primitives
 * - catalogs neutral envelopes
 * - catalogs presence formats
 * - preserves future validation definitions
 * - maintains uIDL grammar integrity
 */

import { IdentityDescriptionPrimitive } from "./identity-description-primitive";
import { NeutralEnvelope } from "./neutral-envelope";
import { PresenceFormat } from "./presence-format";

export interface UIDLRepository {
  /**
   * Governing uIDL doctrine.
   */
  doctrine: "CyberCity_UIDLRepository";

  /**
   * Structural artifact discriminator.
   */
  status: "UIDL_REPOSITORY";

  /**
   * Identity definition primitives.
   *
   * Definitions only.
   */
  primitives: readonly IdentityDescriptionPrimitive[];

  /**
   * Neutral transport definitions.
   */
  envelopes: readonly NeutralEnvelope[];

  /**
   * Presence grammar definitions.
   */
  presenceFormats: readonly PresenceFormat[];

  /**
   * Future structural validation definitions.
   */
  validationRules: readonly unknown[];

  /**
   * Repository readiness state.
   */
  repositoryState: "READY";
}

/**
 * Build uIDL Dewey authority repository.
 *
 * This creates a definition catalog.
 *
 * It does not:
 * - store identity
 * - resolve identity
 * - authenticate identity
 * - create profiles
 * - generate authority
 *
 * It only preserves the grammar of safe identity presence.
 */
export function buildUIDLRepository(
  primitives: IdentityDescriptionPrimitive[],
  envelopes: NeutralEnvelope[] = [],
  presenceFormats: PresenceFormat[] = [],
  validationRules: unknown[] = []
): UIDLRepository {
  const artifact: UIDLRepository = {
    doctrine: "CyberCity_UIDLRepository",

    status: "UIDL_REPOSITORY",

    primitives: Object.freeze([...primitives]),

    envelopes: Object.freeze([...envelopes]),

    presenceFormats: Object.freeze([...presenceFormats]),

    validationRules: Object.freeze([...validationRules]),

    repositoryState: "READY",
  };

  return Object.freeze(artifact);
}
