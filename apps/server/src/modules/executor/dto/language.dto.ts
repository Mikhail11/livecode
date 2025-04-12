export class PossibleLanguageDto {
  readonly language: string;

  readonly language_version: string;

  readonly installed: boolean;
}

export class LanguageDto {
  readonly language: string;

  readonly version: string;
}

export class AvailableLanguageDto extends LanguageDto {
  readonly aliases: string[];

  readonly runtime?: string;
}

export class PossibleLanguagesResponseDto {
  readonly languages: PossibleLanguageDto[];
}

export class AvailableLanguagesResponseDto {
  readonly languages: AvailableLanguageDto[];
}
