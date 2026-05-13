# Security Specification - LesTech Inquiries

## 1. Data Invariants
- An inquiry must have a valid `name`, `company`, `email`, `phone`, `sector`, and `message`.
- `createdAt` must be the server time.
- All strings must have a reasonable maximum size to prevent resource exhaustion.
- Inquiries can be created by anyone (public), but once created, they cannot be modified or deleted by the public.
- Reading inquiries is restricted to admins.

## 2. The "Dirty Dozen" Payloads (Expected to be DENIED)
1. **Identity Spoofing**: Attempt to read inquiries without being signed in as admin.
2. **Identity Spoofing**: Attempt to read inquiries as a signed-in non-admin user.
3. **Ghost Field**: Attempt to create an inquiry with an extra field `isVerified: true`.
4. **Invalid Type**: Attempt to create an inquiry with `name` as a number.
5. **Payload Size**: Attempt to create an inquiry with a 1MB `message`.
6. **Timeline Poisoning**: Attempt to create an inquiry with a client-provided `createdAt` (not server timestamp).
7. **State Shortcutting**: Attempt to update an inquiry (immutability check).
8. **Resource Poisoning**: Attempt to create an inquiry with a 2KB string as ID.
9. **PII Blanket**: Attempt to list all inquiries as a public user.
10. **Missing Required**: Attempt to create an inquiry without the `email` field.
11. **ID Poisoning**: Attempt to get a specific inquiry with a junk ID.
12. **Self-Assigned Role**: Attempt to write to an `/admins/` collection.

## 3. Test Runner (Mock)
A manual verification will be conducted using the `DRAFT_firestore.rules`.
