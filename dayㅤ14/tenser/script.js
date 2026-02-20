// const {optimizer} = require("@tensorflow/tfjs");

async function predictY() {

    const model = tf.sequential();

    model.add(
        tf.layers.dense({
            units: 1,
            inputShape: [1]
        })
    );

    model.compile({
        optimizer: tf.train.sgd(0.1),
        loss: 'meanSquaredError'
    });

    const x_sample = tf.tensor2d([0, 1, 2, 3, 4, 5], [6, 1]);
    const y_sample = tf.tensor2d([-1, 1, 3, 5, 7, 9], [6, 1]);

    await model.fit(x_sample, y_sample, { epochs: 200 });

    const result = model.predict(tf.tensor2d([6], [1, 1]));

    result.print();
}

predictY();
