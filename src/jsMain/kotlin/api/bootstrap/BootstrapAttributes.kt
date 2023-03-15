@file:Suppress(
    "EXTERNAL_TYPE_EXTENDS_NON_EXTERNAL_TYPE",
    "DECLARATION_CANT_BE_INLINED",
)

package api.bootstrap

external interface BootstrapAttributes

inline var BootstrapAttributes.bsToggle: String
    get() = asDynamic()["data-bs-toggle"]
    set(value) {
        asDynamic()["data-bs-toggle"] = value
    }

inline var BootstrapAttributes.bsTarget: String
    get() = asDynamic()["data-bs-target"]
    set(value) {
        asDynamic()["data-bs-toggle"] = value
    }
