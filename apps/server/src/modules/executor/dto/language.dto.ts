export class PackageDto {
  readonly language: string;

  readonly language_version: string;

  readonly installed: boolean;
}

export class InstalledPackageDto {
  readonly language: string;

  readonly language_version: string;

  readonly installed: boolean;
}

export class InstallPackageDto {
  readonly language: string;

  readonly version: string;
}
