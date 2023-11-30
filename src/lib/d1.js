/** @param {string[][]} pragmaTableListResult */
export const excludePrivateTableList = (pragmaTableListResult) =>
  pragmaTableListResult.filter(
    ([schema, name, type]) =>
      schema === "main" &&
      !(name.startsWith("_cf") || name.startsWith("sqlite_") || name.startsWith("d1_")) &&
      type === "table",
  );
