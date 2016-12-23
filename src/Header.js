import Vue from 'vue'

Vue.component('header-view', {
    functional: true,
    // To compensate for the lack of an instance,
    // we are now provided a 2nd context argument.
    render: function(createElement, context) {
        // ...
    },
    // Props are optional
    props: {
        // ...
    }
})