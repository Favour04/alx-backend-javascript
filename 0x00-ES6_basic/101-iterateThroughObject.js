export default function iterateThroughObject(reportWithIterator) {
    let Str = '';
    for (const rpx of reportWithIterator) {
      Str += rpx;
      if (rpx !== reportWithIterator[reportWithIterator.length - 1]) Str += ' | ';
    }
    return Str;
  }