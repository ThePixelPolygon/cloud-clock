package api.bootstrap

external interface BootstrapAttributes

inline var BootstrapAttributes.bsToggle: String
    get() = asDynamic()["data-bs-toggle"]
    set(value) {
        asDynamic()["data-bs-toggle"] = value
    }
