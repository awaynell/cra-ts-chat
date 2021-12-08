import { TooltipProps, tooltipClasses, Tooltip } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const CustomTooltip = styled(({ className, ...props }: TooltipProps) => <Tooltip {...props} arrow classes={{ popper: className }} />)(
  ({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: "var(--layout-chat-bg)",
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "var(--layout-chat-bg)",
      color: "var(--font-color)",
    },
  })
);

export default CustomTooltip;
