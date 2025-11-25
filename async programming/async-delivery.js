function step(msg, time=1000) {
  return new Promise(res => setTimeout(() => { console.log(msg); res(); }, time));
}

async function deliveryPipeline() {
  try {
    await step("Order received");
    await step("Preparing food");
    await step("Cooking");
    await step("Packing");
    await step("Out for delivery");
    await step("Delivered to customer");
    console.log("Delivery completed successfully!");
  } catch(err) {
    console.error("Delivery failed:", err);
  }
}

deliveryPipeline();