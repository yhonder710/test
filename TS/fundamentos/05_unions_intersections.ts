// Fundamentos TS - Uniones e Intersecciones

type UserState = "idle" | "loading" | "success" | "error";

type ApiResponse = { ok: true; data: any } | { ok: false; error: string };

function handleResponse(res: ApiResponse) {
  if (res.ok) {
    console.log("Data:", res.data);
  } else {
    console.log("Error:", res.error);
  }
}

handleResponse({ ok: true, data: { id: 1 } });
handleResponse({ ok: false, error: "Not found" });
