export function validateContactForm(form) {
  const errors = {};

  if (!form.name.trim()) {
    errors.name = "Name is required";
  }

  if (!form.email.trim()) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(form.email)) {
    errors.email = "Invalid email";
  }

  if (!form.message.trim()) {
    errors.message = "Message is required";
  }

  return errors;
}

export async function sendContact(form) {
  // Fake API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    success: true,
    message: "✅ Message sent successfully!",
  };
}