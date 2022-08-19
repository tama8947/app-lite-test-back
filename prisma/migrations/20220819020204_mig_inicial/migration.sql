-- CreateTable
CREATE TABLE "t_empresas" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "nombre_empresa" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "num_documento" TEXT NOT NULL,
    "Telefono" TEXT NOT NULL,
    "tipo_documento" TEXT,

    CONSTRAINT "t_empresas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_tipo_documentos" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "nombre_corto" TEXT NOT NULL,
    "nombre_largo" TEXT NOT NULL,

    CONSTRAINT "t_tipo_documentos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "t_empresas" ADD CONSTRAINT "t_empresas_tipo_documento_fkey" FOREIGN KEY ("tipo_documento") REFERENCES "t_tipo_documentos"("id") ON DELETE SET NULL ON UPDATE CASCADE;
