(() => {
  const params = new URLSearchParams(window.location.search);
  const invite = params.get("invite");

  const inviteBox = document.getElementById("inviteBox");
  const inviteCode = document.getElementById("inviteCode");
  const copyButton = document.getElementById("copyButton");
  const status = document.getElementById("status");

  if (invite) {
    inviteCode.textContent = invite;
    inviteBox.hidden = false;
    copyButton.hidden = false;

    copyButton.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(window.location.href);
        copyButton.textContent = "Copied!";
        setTimeout(() => copyButton.textContent = "Copy invite link", 1500);
      } catch {
        status.textContent = "Copying failed. You can copy the URL from your browser instead.";
      }
    });
  } else {
    status.textContent =
      "This page is ready for Frog Planter invitations. A valid invite link will contain an invite token.";
  }

  // Later, add App Store / Google Play fallback URLs when those store pages exist.
})();
