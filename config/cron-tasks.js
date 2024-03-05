module.exports = {
  /**
   * Update user data at the beginning of every day (00:00).
   */

  "0 0 * * *": async ({ strapi }) => {
    try {
      // Your logic to update user data here
      // For example, updating a specific field for all users:
      await strapi
        .query("user", "users-permissions")
        .update({}, { messageCount: 5 });

      console.log("User data updated successfully");
    } catch (err) {
      console.error("Failed to update user data:", err);
    }
  },
};
