export async function fetchAndProcessImage(url?: string): Promise<Blob> {
    try {
        const response = await fetch("https://drive.google.com/file/d/1fJ_4p5jobwCDcdiOApTttR3L7-yifmmL");

        if (!response.ok) {
            console.error('No se pudo obtener la imagen');
            return null;
        }

        // Procesamos la respuesta en formato Blob.
        const blob = await response.blob();

        return blob;
    } catch (error) {
        console.error('Ocurrió un error al procesar la imagen:', error);
        return null;
    }
}