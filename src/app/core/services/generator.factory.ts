import { GeneratorService } from './generator.service';

export function GeneratorFactory(length: number) {
  return (charactersString: GeneratorService): string => {
    if (length <= 0) {
      return '';
    }

    const characters: string = charactersString.getCharString();
    const charactersLength = characters.length;

    let result = '';

    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };
}
