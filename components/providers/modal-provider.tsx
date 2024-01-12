"use client";

import { CreateServerModal } from "@/components/modals/create-server-modal";
import { Fragment, useEffect, useState } from "react";
import { InviteModal } from "../modals/invite-modal";
import { EditServerModal } from "../modals/edit-server-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Fragment>
      <CreateServerModal />
      <InviteModal />
      <EditServerModal />
    </Fragment>
  );
};
