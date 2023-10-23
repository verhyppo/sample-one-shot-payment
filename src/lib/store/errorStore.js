

export let container = {kitchen: []};

export default function(message) {
    container.kitchen.push({
      props: {
        variant: "stacked",
        class: "demo-error",  
      },
      class: "demo-error",
      label: message,
      dismissButton: true
    });
  }