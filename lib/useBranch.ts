"use client";

import { useState, useEffect } from "react";
import { BranchConfig, getBranchByDomain, defaultBranch } from "./branchConfig";

export function useBranch(): BranchConfig {
  const [branch, setBranch] = useState<BranchConfig>(defaultBranch);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateBranch = () => setBranch(getBranchByDomain(window.location.hostname));
    const timer = window.setTimeout(updateBranch, 0);
    return () => window.clearTimeout(timer);
  }, []);

  return branch;
}
