import { useState, useRef } from "react";
import Icon from "@/components/ui/icon";
import FUNC2URL from "../../backend/func2url.json";

const MAX_SIZE_MB = 200;

export default function UploadVideo() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [resultUrl, setResultUrl] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);

  const handleFile = (f: File) => {
    setError("");
    setResultUrl("");
    if (f.size > MAX_SIZE_MB * 1024 * 1024) {
      setError(`Файл слишком большой. Максимум ${MAX_SIZE_MB} МБ.`);
      return;
    }
    setFile(f);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const f = e.dataTransfer.files[0];
    if (f) handleFile(f);
  };

  const upload = async () => {
    if (!file) return;
    setUploading(true);
    setProgress(0);
    setError("");

    const reader = new FileReader();
    reader.onload = async (e) => {
      const base64 = (e.target?.result as string).split(",")[1];
      setProgress(40);
      const res = await fetch(FUNC2URL["upload-video"], {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          file: base64,
          name: file.name,
          contentType: file.type || "video/mp4",
        }),
      });
      setProgress(90);
      const data = await res.json();
      if (data.url) {
        setResultUrl(data.url);
        setProgress(100);
      } else {
        setError("Ошибка загрузки. Попробуй ещё раз.");
      }
      setUploading(false);
    };
    reader.onerror = () => {
      setError("Не удалось прочитать файл.");
      setUploading(false);
    };
    reader.readAsDataURL(file);
  };

  const copy = () => {
    navigator.clipboard.writeText(resultUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-6">
      <div className="w-full max-w-xl">
        <div className="flex items-center gap-3 mb-8">
          <img
            src="https://cdn.poehali.dev/files/72784b27-9292-49fa-b815-c6aaa9146f3e.jpg"
            alt="Chopper Doctors World"
            className="w-10 h-10 object-contain"
          />
          <div>
            <h1 className="font-display text-2xl uppercase tracking-wide">Загрузка видео</h1>
            <p className="font-body text-xs text-muted-foreground">Загрузи видео и скопируй ссылку для галереи</p>
          </div>
        </div>

        {!resultUrl ? (
          <>
            <div
              className={`border-2 border-dashed rounded-sm p-10 text-center cursor-pointer transition-all mb-4 ${
                dragging ? "border-fire bg-fire/5" : "border-border hover:border-fire/50"
              }`}
              onClick={() => inputRef.current?.click()}
              onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
              onDragLeave={() => setDragging(false)}
              onDrop={handleDrop}
            >
              <input
                ref={inputRef}
                type="file"
                accept="video/*"
                className="hidden"
                onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
              />
              <Icon name="Upload" size={32} className="text-muted-foreground mx-auto mb-3" />
              {file ? (
                <div>
                  <p className="font-body text-sm text-foreground font-medium">{file.name}</p>
                  <p className="font-body text-xs text-muted-foreground mt-1">
                    {(file.size / 1024 / 1024).toFixed(1)} МБ
                  </p>
                </div>
              ) : (
                <div>
                  <p className="font-body text-sm text-foreground mb-1">Перетащи видео сюда или нажми</p>
                  <p className="font-body text-xs text-muted-foreground">MP4, MOV, AVI · до {MAX_SIZE_MB} МБ</p>
                </div>
              )}
            </div>

            {error && (
              <div className="mb-4 p-3 border border-destructive/40 bg-destructive/5 rounded-sm font-body text-sm text-destructive">
                {error}
              </div>
            )}

            {uploading && (
              <div className="mb-4">
                <div className="h-1.5 bg-border rounded-full overflow-hidden">
                  <div
                    className="h-full bg-fire transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="font-body text-xs text-muted-foreground mt-2 text-center">Загрузка... {progress}%</p>
              </div>
            )}

            <button
              onClick={upload}
              disabled={!file || uploading}
              className="w-full font-display text-sm tracking-widest uppercase py-4 bg-fire text-white hover:bg-fire/80 disabled:opacity-40 disabled:cursor-not-allowed transition-all rounded-sm"
            >
              {uploading ? "Загружаю..." : "Загрузить"}
            </button>
          </>
        ) : (
          <div className="border border-border rounded-sm p-6 bg-card">
            <div className="flex items-center gap-2 mb-4">
              <Icon name="CheckCircle" size={18} className="text-green-500" />
              <span className="font-body text-sm text-foreground font-medium">Видео загружено!</span>
            </div>

            <video
              src={resultUrl}
              controls
              className="w-full rounded-sm mb-4 border border-border"
            />

            <p className="font-body text-xs text-muted-foreground mb-2">Ссылка для галереи:</p>
            <div className="flex gap-2">
              <input
                readOnly
                value={resultUrl}
                className="flex-1 font-body text-xs bg-background border border-border rounded-sm px-3 py-2 text-foreground min-w-0"
              />
              <button
                onClick={copy}
                className="font-display text-xs tracking-widest uppercase px-4 py-2 bg-fire text-white hover:bg-fire/80 transition-all rounded-sm flex-shrink-0"
              >
                {copied ? "Скопировано!" : "Копировать"}
              </button>
            </div>

            <button
              onClick={() => { setFile(null); setResultUrl(""); setProgress(0); }}
              className="mt-4 w-full font-body text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Загрузить ещё одно видео
            </button>
          </div>
        )}
      </div>
    </div>
  );
}