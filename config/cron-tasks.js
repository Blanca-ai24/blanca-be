module.exports = {
  /**
   * Update user data every day 12AM.
   */
  "0 0 * * *": async ({ strapi }) => {
    try {
      // Your logic to update user data here
      // For example, updating a specific field for all users:
      const entry = await strapi.db
        .query("plugin::users-permissions.user")
        .updateMany({
          data: {
            messageCount: 5,
          },
        });

      console.log("entry", entry);

      console.log("User data updated successfully");
    } catch (err) {
      console.error("Failed to update user data:", err);
    }
  },
};
 