export default function save({ attributes }) {
    const { desktopImage, mobileImage, imageLink, altText } = attributes;

    if (!desktopImage) return null;

    const picture = (
        <picture>
            {mobileImage && <source srcSet={mobileImage} media="(max-width: 768px)" />}
            <img src={desktopImage} alt={altText || ''} style={{ width: '100%', display: 'block' }} />
        </picture>
    );

    return imageLink ? (
        <a href={imageLink} target="_blank" rel="noopener noreferrer">
            {picture}
        </a>
    ) : picture;
}
