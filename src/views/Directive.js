import Vue from "vue";

//Make Bold Custom Directive
Vue.directive("font", {
    bind: function(el, binding) {
        el.style.fontSize = binding.value + "px";
        // console.log("Directive Name => $(binding.name)");

        //Bold Modifier
        if (binding.modifiers.bold) {
            el.style.fontWeight = "bold";
        }

        //Orange Modifier
        if (binding.modifiers.orange) {
            el.style.color = "orange";
        }
    },
});