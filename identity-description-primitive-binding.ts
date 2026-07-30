/**
 * uIDL — Identity Description Primitive Binding
 *
 * IdentityDescriptionPrimitiveBinding establishes a passive
 * structural relationship between a uIDL landing artifact and
 * an IdentityDescriptionPrimitive definition.
 *
 * This artifact connects grammar to presence without creating
 * a profile, interpretation layer, authority model, or behavioral
 * representation.
 *
 * It does not:
 * - identify a person
 * - store identity instances
 * - store metadata
 * - represent personality
 * - represent preferences
 * - represent history
 * - predict behavior
 * - create authority
 * - modify sovereignty
 *
 * It only:
 * - binds a presence artifact to a definition primitive
 * - preserves uIDL grammar
 * - maintains non-interference doctrine
 * - preserves structural separation
 */

import { uIDL } from "./uidl";
import { IdentityDescriptionPrimitive } from "./identity-description-primitive";

export interface IdentityDescriptionPrimitiveBinding {
  /**
   * Governing uIDL doctrine.
   */
  doctrine: "CyberCity_uIDL_IdentityDescriptionPrimitiveBinding";

  /**
   * Structural artifact discriminator.
   */
  status: "UIDL_IDENTITY_DESCRIPTION_BINDING";

  /**
   * Neutral uIDL landing artifact.
   *
   * Never interpreted.
   * Never enriched.
   */
  uidl: uIDL;

  /**
   * Identity description definition.
   *
   * Defines structure only.
   * Does not describe the human.
   */
  primitive: IdentityDescriptionPrimitive;

  /**
   * Passive structural relationship state.
   *
   * Not ownership.
   * Not authority.
   * Not activation.
   */
  bindingState: "BOUND";
}

/**
 * Build IdentityDescriptionPrimitiveBinding.
 *
 * Creates a passive relationship between:
 *
 * uIDL:
 *   identity landing presence
 *
 * IdentityDescriptionPrimitive:
 *   structural definition
 *
 * It does not:
 * - create a profile
 * - resolve identity
 * - infer meaning
 * - activate behavior
 * - grant authority
 */
export function buildIdentityDescriptionPrimitiveBinding(
  uidl: uIDL,
  primitive: IdentityDescriptionPrimitive
): IdentityDescriptionPrimitiveBinding {
  const artifact: IdentityDescriptionPrimitiveBinding = {
    doctrine:
      "CyberCity_uIDL_IdentityDescriptionPrimitiveBinding",

    status:
      "UIDL_IDENTITY_DESCRIPTION_BINDING",

    uidl,

    primitive,

    bindingState: "BOUND",
  };

  return Object.freeze(artifact);
}
