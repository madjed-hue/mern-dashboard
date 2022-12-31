import React from "react";
import { Skeleton as SK } from "@mui/material";
import Stack from "@mui/material/Stack";

const Skeleton = () => {
  return (
    <Stack spacing={3}>
      {/* For variant="text", adjust the height via font-size */}
      <SK variant="text" sx={{ fontSize: "1rem", bgcolor: "#ffe3a3" }} />

      {/* For other variants, adjust the size with `width` and `height` */}
      <SK
        variant="rounded"
        width={40}
        height={10}
        sx={{ bgcolor: "#ffe3a3" }}
      />
      <SK
        variant="rounded"
        width={"100%"}
        height={8}
        sx={{ bgcolor: "#ffe3a3" }}
      />
      <SK
        variant="rounded"
        width={"100%"}
        height={8}
        sx={{ bgcolor: "#ffe3a3" }}
      />
    </Stack>
  );
};

export default Skeleton;
