import { MediaUpload, InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { Button, TextControl, PanelBody, CheckboxControl } from '@wordpress/components';
import { Fragment } from '@wordpress/element';

export default function Edit({ attributes, setAttributes }) {
    const { desktopImage, mobileImage, imageLink, altText, disableLazyLoading } = attributes;

    const blockProps = useBlockProps({
        className: 'cl-responsive-image'
    });

    return (
        <Fragment>
            <InspectorControls>
                <PanelBody title="Imágenes" initialOpen={true}>
                    <MediaUpload
                        onSelect={(media) => setAttributes({ desktopImage: media.url })}
                        allowedTypes={['image']}
                        render={({ open }) => (
                            <Button onClick={open} variant="primary" style={{ marginBottom: '10px', width: '100%' }}>
                                {desktopImage ? 'Cambiar imagen de escritorio' : 'Seleccionar imagen de escritorio'}
                            </Button>
                        )}
                    />
                    {desktopImage && (
                        <div style={{ marginBottom: '20px' }}>
                            <img 
                                src={desktopImage} 
                                alt="Vista previa escritorio" 
                                style={{ 
                                    width: '100%', 
                                    height: 'auto', 
                                    border: '1px solid #ddd',
                                    borderRadius: '4px'
                                }} 
                            />
                        </div>
                    )}

                    <MediaUpload
                        onSelect={(media) => setAttributes({ mobileImage: media.url })}
                        allowedTypes={['image']}
                        render={({ open }) => (
                            <Button onClick={open} variant="secondary" style={{ marginBottom: '10px', width: '100%' }}>
                                {mobileImage ? 'Cambiar imagen móvil' : 'Seleccionar imagen móvil'}
                            </Button>
                        )}
                    />
                    {mobileImage && (
                        <div style={{ marginBottom: '20px' }}>
                            <img 
                                src={mobileImage} 
                                alt="Vista previa móvil" 
                                style={{ 
                                    width: '100%', 
                                    height: 'auto', 
                                    border: '1px solid #ddd',
                                    borderRadius: '4px'
                                }} 
                            />
                        </div>
                    )}
                </PanelBody>

                <PanelBody title="Configuración de imagen" initialOpen={true}>
                    <TextControl
                        label="Enlace de la imagen"
                        value={imageLink}
                        onChange={(value) => setAttributes({ imageLink: value })}
                    />

                    <TextControl
                        label="Texto alternativo"
                        value={altText}
                        onChange={(value) => setAttributes({ altText: value })}
                    />

                    <CheckboxControl
                        label="Deshabilitar lazy loading"
                        checked={disableLazyLoading}
                        onChange={(value) => setAttributes({ disableLazyLoading: value })}
                    />
                </PanelBody>
            </InspectorControls>

            <div {...blockProps}>
                <div className="cl-responsive-image-editor">
                    {desktopImage ? (
                        <picture className="cl-responsive-image-picture">
                            {mobileImage && <source srcSet={mobileImage} media="(max-width: 768px)" />}
                            <img 
                                src={desktopImage} 
                                alt={altText || 'Vista previa'} 
                                className="cl-responsive-image-img"
                            />
                        </picture>
                    ) : (
                        <div className="cl-responsive-image-placeholder">
                            <p>Selecciona una imagen de escritorio para comenzar</p>
                        </div>
                    )}
                </div>
            </div>
        </Fragment>
    );
}
